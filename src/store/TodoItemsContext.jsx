import { createContext } from "react";

export const TodoItemContext = createContext({
  todoItems:[],
  addNewItem:()=>{},
  deleteButton:()=>{},
});
