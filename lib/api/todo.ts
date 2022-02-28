import axios from ".";
import { TodoType } from "../../types/todo";

interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

/* TodoList 불러오는 API */
export const getTodosAPI = () => axios.get<TodoType[]>("/api/todos");

/* Todo check 하기 */
export const checkTodoAPI = (id: number) => axios.patch(`/api/todos/${id}`);

/* Todo 추가하기 */
export const addTodoAPI = (body: AddTodoAPIBody) => axios.post("/api/todos", body);

/* Todo 삭제하기 */
export const deleteTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`);
