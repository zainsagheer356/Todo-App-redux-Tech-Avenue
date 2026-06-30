import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList(){

const {list,filter}=useSelector(state=>state.todos);

const filtered=list.filter(todo=>{

if(filter==="active") return !todo.completed;

if(filter==="completed") return todo.completed;

return true;

});

return(

<div className="space-y-3 mt-5">

{filtered.map(todo=>(

<TodoItem
key={todo.id}
todo={todo}
/>

))}

</div>

);

}