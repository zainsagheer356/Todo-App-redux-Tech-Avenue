import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import TodoFilter from "./components/TodoFilter";

export default function App(){

return(

<div className="min-h-screen bg-gray-100">

<div className="max-w-xl mx-auto p-5">

<h1 className="text-4xl font-bold text-center mb-5">

Redux Todo App

</h1>

<TodoInput/>

<TodoFilter/>

<TodoStats/>

<TodoList/>

</div>

</div>

);

}