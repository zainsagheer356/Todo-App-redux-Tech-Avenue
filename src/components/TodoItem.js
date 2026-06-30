import { useDispatch } from "react-redux";
import {
deleteTodo,
toggleTodo,
editTodo,
} from "../redux/todoSlice";

export default function TodoItem({todo}) {

const dispatch=useDispatch();

const edit=()=>{

const text=prompt("Edit Todo",todo.text);

if(text){

dispatch(editTodo({
id:todo.id,
text
}));

}

};

return(

<div className="flex justify-between items-center border p-3 rounded">

<div className="flex items-center gap-3">

<input
type="checkbox"
checked={todo.completed}
onChange={()=>dispatch(toggleTodo(todo.id))}
/>

<span
className={todo.completed?"line-through":""}
>

{todo.text}

</span>

</div>

<div className="flex gap-2">

<button
onClick={edit}
className="bg-yellow-500 px-3 rounded text-white"
>

Edit

</button>

<button
onClick={()=>dispatch(deleteTodo(todo.id))}
className="bg-red-600 px-3 rounded text-white"
>

Delete

</button>

</div>

</div>

);

}