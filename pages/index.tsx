// eslint-disable-next-line no-use-before-define
import React from "react";
import { NextPage } from "next";
import TodoList from "@components/TodoList";
import { getTodosAPI } from "@lib/api/todo";
import { TodoType } from "../types/todo";
import { wrapper } from "@store/index";
import { todoActions } from "@store/todo";

// import { TodoType } from "../types/todo";

const app: NextPage = () => {
  return <TodoList />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  try {
    const { data } = await getTodosAPI();
    store.dispatch(todoActions.setTodo(data));
    return { props: { todos: data } };
  } catch (error) {
    console.log(error);
    return { props: { todos: [] } };
  }
});

export default app;
