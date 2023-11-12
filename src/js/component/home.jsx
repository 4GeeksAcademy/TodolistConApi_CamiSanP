import React, { useState } from "react";


//create your first component
const Home = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [delet, setDelet] = useState(false);
	return (
		<div className="Todolist">
			<h1 className="myh1">Todos</h1>
			<ul>
				<input type="text" className="input" onChange={(e) => setValue(e.target.value)} value={value} placeholder="What needs to be done?" onKeyDown={(e) => { if (e.key === "Enter") { setTodos(todos.concat([value])); setValue(""); } }} />

				{todos.map((item, index) => (
					<li key={index} className="items" onMouseEnter={() => setDelet(index)} onMouseLeave={() => setDelet(null)}> {item}{" "}{delet === index && (
					  <i className="fa-solid fa-xmark" onClick={() => setTodos(todos.filter((_, indexActual) => index !== indexActual))}></i>
					)}
				  </li>
				))}
			</ul>
			<div style={{paddingLeft:"30px", color:" rgba(62, 0, 128, 0.384)"}}>{todos.length > 0 ? (<p>{todos.length} item left</p>) : (<p>Add task</p>)}</div>
		</div>

	);
};

export default Home;
