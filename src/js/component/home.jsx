import React, { useState } from "react";


//create your first component
const Home = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="Todolist">
			<h1 className="myh1">Todos</h1>
			<ul>
				<input type="text" className="input" onChange={(e) => setValue(e.target.value)} value={value} placeholder="What needs to be done?" onKeyDown={(e) => { if (e.key === "Enter") { setTodos(todos.concat([value])); setValue(""); } }} />

				{todos.map((item, index) => (
					<li className="items">{item}{" "} <i className="fa-solid fa-xmark" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				))}
			</ul>
		</div>

	);
};

export default Home;
