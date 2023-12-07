import { TodoItemContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";
import { useContext } from "react";

const TodoItems = () => {
  
  const {todoItems}  = useContext(TodoItemContext);
  console.log(todoItems );
  return (
    <div>
      {todoItems &&
        todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            key={item.name}
          />
        ))}
    </div>
  );
};

export default TodoItems;
