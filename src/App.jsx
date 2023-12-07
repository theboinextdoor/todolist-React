import { useState, useRef } from "react";
import InputField from "./components/InputField";
import MyDay from "./components/MyDay";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItems from "./components/TodoItems";
import { TodoItemContext } from "./store/TodoItemsContext";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (iteName) => {
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, { name: iteName }];
      return newTodoItems;
    });
  };

  const deleteButton = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteButton }}>
      <div className="bg-[url('./img/background.jpg')] min-h-screen w-full bg-center bg-cover p-1">
        <MyDay />
        <InputField />
        <WelcomeMsg />
        <TodoItems />
      </div>
    </TodoItemContext.Provider>
  );
}

export default App;
