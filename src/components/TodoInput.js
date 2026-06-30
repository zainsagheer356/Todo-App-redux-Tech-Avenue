import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function TodoInput() {

const [text, setText] = useState("");

const dispatch = useDispatch();

const submit = () => {

if (!text.trim()) return;

dispatch(addTodo(text));

setText("");

};

return (

<div className="flex gap-2">

<input

className="border p-2 flex-1 rounded"

placeholder="Enter Todo"

value={text}

onChange={(e)=>setText(e.target.value)}

/>

<button

onClick={submit}

className="bg-blue-600 text-white px-5 rounded"

>

Add

</button>

</div>

);

}