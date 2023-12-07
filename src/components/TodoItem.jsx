import { GiCrossMark } from "react-icons/gi";
import { TodoItemContext } from "../store/TodoItemsContext";
import { useContext } from "react";

const TodoItem = ({ todoName }) => {
    const dltButton = {
        color: "red",
        fontSize: "1.5em",
      };

      const {deleteButton} = useContext(TodoItemContext)
    
  return (
    <div
      className="bg-gray-100 m-2 rounded-lg p-6 text-slate-100 flex items-start space-x-3
    justify-between h-auto mb-2 bg-opacity-40 backdrop-blur-sm md:mx-5 lg:mx-8 "
    >
      <div className="font-semibold text-xl" >{todoName}</div>
      <div className="">
        <button type="submit"
        onClick={() => deleteButton(todoName)}>
          <GiCrossMark style={dltButton} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
