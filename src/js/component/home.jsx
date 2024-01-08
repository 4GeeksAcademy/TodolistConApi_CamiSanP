import React, {useState, useEffect} from "react";

const Home = () => {

	
	const [tarea,setTarea] = useState("");
	const [lista,setLista] = useState([]);

	function crearUsuario(){
		fetch(`https://playground.4geeks.com/apis/fake/todos/user/camisanp`,
		{method: 'POST', 
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify([])
	  })
		.then((response)=>response.json())
		.then((data)=>console.log(data))
	}


	function agregarTarea(e) {
		e.preventDefault()
		setLista(lista.concat({label: tarea, done: false}))
		setTarea("")
	}

	const borrarTarea = (indexItem) => {
		setLista((prevState) =>
		  prevState.filter((listaItems, index) => index !== indexItem)
		);
	  };

	function obtenerLista(){
		fetch(`https://playground.4geeks.com/apis/fake/todos/user/camisanp`,
		{method: 'GET', 
		
	  })
		.then((response)=>response.json())
		.then((data)=>setLista(data))
	}

	function borrarLista(){
		fetch(`https://playground.4geeks.com/apis/fake/todos/user/camisanp`,
		{method: 'DELETE', 
		headers: {
			'Content-Type': 'application/json'}
	  })
		.then((response)=>response.json())
		.then((data)=>{
			console.log(data.result)
			if (data.result === "ok"){
				setLista([])
			}
		})
		
	}
	  
	function actualizar(){
		fetch(`https://playground.4geeks.com/apis/fake/todos/user/camisanp`,
		{method: 'PUT', 
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(lista)
	  })
		.then((response)=>response.json())
		.then((data)=>console.log(data))
	}
	
	useEffect (()=>{
		crearUsuario();
		obtenerLista()
	},[])

	useEffect (()=>{
		actualizar()
		},[lista])

		return (
			<div className="container mt-5">
			  <div className="card">
				<div className="card-header bg-light">
				  <h2 className="titulo text-center">Lista de Tareas</h2>
				</div>
				<div className="card-body">
				  <div className="input-group mb-3">
					<input
					  type="text"
					  className="form-control"
					  value={tarea}
					  onChange={(e) => setTarea(e.target.value)}
					  placeholder="Añadir una tarea"
					/>
					<div className="input-group-append">
					  <button
						className="btn btn-primary"
						type="button"
						onClick={agregarTarea}
					  >
						Agregar Tarea
					  </button>
					</div>
				  </div>
				  <ul className="list-group">
					{lista.map((item, index) => (
					  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
						{item.label}
						<button
						  className="btn btn-danger"
						  onClick={() => borrarTarea(index)}
						>
						  <i className="fas fa-trash-alt" />
						</button>
					  </li>
					))}
				  </ul>
				</div>
				<div className="card-footer bg-light">
				  <button
					className="btn btn-danger btn-sm"
					onClick={borrarLista}
				  >
					Borrar Lista
				  </button>
				</div>
			  </div>
			</div>
		  );
		};

export default Home;