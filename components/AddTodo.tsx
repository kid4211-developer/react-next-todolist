// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import AddContainer from "@components/style/AddContainer";
import BrushIcon from "../public/statics/svg/brush.svg";
import { TodoType } from "../types/todo";
import { addTodoAPI } from "@lib/api/todo";
import { useRouter } from "next/router";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState<TodoType["color"]>(null);
  const router = useRouter();

  const contentHandler = (e: any) => {
    setText(e.currentTarget.value);
  };

  const selectTodoColor = (color: TodoType["color"]) => {
    if (!selectedColor) {
      setSelectedColor(color);
    } else {
      setSelectedColor(null);
    }
  };

  const addTodo = async () => {
    try {
      if (!text) {
        alert("할 일을 입력해주세요.");
        return;
      }
      if (!selectedColor) {
        alert("색상을 선택해주세요.");
        return;
      }

      await addTodoAPI({ text, color: selectedColor });

      router.push("/");
    } catch (e) {
      console.log("addTodo error >>>>", e);
    }
  };

  return (
    <AddContainer>
      <div className="add-todo-header">
        <h1 className="add-todo-header-title">Add Todo</h1>
        <button type="button" className="add-todo-submit-button" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <div className="add-todo-colors-wrapper">
        <div className="add-todo-color-list">
          {["red", "orange", "yellow", "green", "blue", "navy"].map((color, index) => (
            <button
              key={index}
              type="button"
              className={`bg-${color} add-todo-color-button ${color === selectedColor ? "add-todo-selected-color" : ""}`}
              onClick={() => selectTodoColor(color as TodoType["color"])}
            />
          ))}
        </div>
        <BrushIcon />
      </div>
      <textarea
        value={text}
        className="add-todo-textarea"
        onChange={(e) => contentHandler(e)}
        placeholder="할 일을 입력해주세요."
      />
    </AddContainer>
  );
};

export default AddTodo;
