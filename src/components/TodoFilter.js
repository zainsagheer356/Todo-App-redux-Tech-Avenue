import {useDispatch} from "react-redux";
import {setFilter} from "../redux/todoSlice";

export default function TodoFilter(){

const dispatch=useDispatch();

return(

<div className="flex gap-3 mt-5">

<button
onClick={()=>dispatch(setFilter("all"))}
className="bg-gray-700 text-white px-3 py-1 rounded"
>

All

</button>

<button
onClick={()=>dispatch(setFilter("active"))}
className="bg-green-700 text-white px-3 py-1 rounded"
>

Active

</button>

<button
onClick={()=>dispatch(setFilter("completed"))}
className="bg-purple-700 text-white px-3 py-1 rounded"
>

Completed

</button>

</div>

);

}