import {useSelector} from "react-redux";

export default function TodoStats(){

const todos=useSelector(state=>state.todos.list);

const total=todos.length;

const completed=todos.filter(
t=>t.completed
).length;

return(

<div className="mt-5">

<h3>Total : {total}</h3>

<h3>Completed : {completed}</h3>

</div>

);

}