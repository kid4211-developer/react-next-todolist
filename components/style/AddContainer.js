import styled from "styled-components";
import pallete from "../../styles/palette";

const AddContainer = styled.div`
  padding: 16px;

  .add-todo-header-title {
    font-size: 21px;
  }

  .add-todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add-todo-submit-button {
      padding: 4px 8px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: white;
      outline: none;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .add-todo-colors-wrapper {
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    .add-todo-color-list {
      display: flex;
      .add-todo-color-button {
        width: 24px;
        height: 24px;
        margin-right: 16px;
        border: 0;
        outline: 0;
        border-radius: 50%;
        &:last-child {
          margin: 0;
        }
        cursor: pointer;
      }
      .add-todo-selected-color {
        border: 2px solid black !important;
      }
    }
  }
  .bg-blue {
    background-color: ${pallete.blue};
  }
  .bg-green {
    background-color: ${pallete.green};
  }
  .bg-navy {
    background-color: ${pallete.navy};
  }
  .bg-orange {
    background-color: ${pallete.orange};
  }
  .bg-red {
    background-color: ${pallete.red};
  }
  .bg-yellow {
    background-color: ${pallete.yellow};
  }
  .add-todo-textarea {
    width: 100%;
    border-radius: 5px;
    height: 300px;
    border-color: ${pallete.gray};
    margin-top: 12px;
    resize: none;
    outline: none;
    padding: 12px;
    font-size: 16px;
  }
`;

export default AddContainer;
