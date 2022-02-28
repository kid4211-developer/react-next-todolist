// eslint-disable-next-line no-use-before-define
import React, { useMemo, useState } from "react";
import { TodoType } from "../types/todo";
import TrashCanIcon from "../public/statics/svg/trash_can.svg";
import CheckMarkIcon from "../public/statics/svg/check_mark.svg";
import Container from "@components/style/Container";
import { checkTodoAPI, deleteTodoAPI } from "@lib/api/todo";
import { RootState, useSelector } from "@store/index";
import { useDispatch } from "react-redux";
import { todoActions } from "@store/todo";

const TodoList: React.FC = () => {
  // 객체의 문자열 인덱스 사용을 위한 타입
  type ObjectIndexType = {
    [key: string]: number | undefined;
  };

  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  // const [localTodos, setLocalTodos] = useState(todos);

  /* 색깔 객체 반환 함수 */
  const todoColorNums = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color];
      if (!value) {
        colors[`${todo.color}`] = 1;
      } else {
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  /**
   * useMemo에 dependency를 부여하여 todos가 변경되는 경우에만
   * 함수를 재연산하여 렌더링 최적화를 할수 있다.
   */

  /* Todo check 하기 */
  const checkTodo = async (id: number) => {
    try {
      await checkTodoAPI(id);
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      dispatch(todoActions.setTodo(newTodos));
    } catch (e) {
      console.log(e);
    }
  };

  /* todo 삭제하기 */
  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id);
      const newTodos = todos.filter((todo) => todo.id !== id);
      dispatch(todoActions.setTodo(newTodos));
    } catch (e) {
      console.log("todoDelete error >>>>", e);
    }
  };

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 Todo : <span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p className={`todo-text ${todo.checked ? "checked-todo-text" : ""}`}>{todo.text}</p>
            </div>
            <div className="todo-right-side">
              {todo.checked && (
                <>
                  <TrashCanIcon
                    className="todo-trash-can"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                  <CheckMarkIcon
                    className="todo-check-mark"
                    onClick={() => {
                      checkTodo(todo.id);
                    }}
                  />
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => {
                    checkTodo(todo.id);
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
