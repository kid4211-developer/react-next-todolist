import { HYDRATE, createWrapper } from "next-redux-wrapper";
import todo from "@store/todo";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state, action) => {
  // 'HYDRATE'는 server에서 생성된 redux store를 client에서 사용 할 수 있도록 전달해주는 역할
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

// store type
export type RootState = ReturnType<typeof rootReducer>;

/** -> Redux Tool Kit
 * middleware 적용을 위한 store enhancer
 * redux에서 middleware는 action이 dispatch 되어 reducer에서 처리하기 전 사전에 지정된 작업 처리를 의미함
 */
// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

const initStore = () => {
  return configureStore({ reducer, devTools: true });
};

/**
 * - reducer와 middleware로 redux store를 만들어 리턴하게 됨
 * - App component에서 wrapper로 사용하기 위해 'next-redux-wrapper'에서 createWrapper를
 *   import하여 wrapper를 만들었음
 */

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const wrapper = createWrapper(initStore);
