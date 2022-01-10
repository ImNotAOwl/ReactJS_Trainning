import { useRef, useState } from "react";
import Button from "../../components/Button/";
import NavBar from "../../components/NavBar";

import "./index.css";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, texte: "Tache 1" },
    { id: 2, texte: "Tache 2" },
    { id: 3, texte: "Tache 3" },
    { id: 4, texte: "Tache 4" },
    { id: 5, texte: "Tache 5" },
    { id: 6, texte: "Tache 6" },
  ]);

  // const [newTodoTexte, setNewTodoTexte] = useState();

const texteRef = useRef();

  let supprimer = (id) => {
    //const newTodos = [...todos]; // copie de tableau pas une référence à todo

    // const index = todos.findIndex((todo) => todo.id === id);
    // newTodos.splice(index, 1);

    // console.log(newTodos);

    // setTodos(newTodos);

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  // const updateNewTodo = (e) => {
  //   console.log(e.target.value);
  //   setNewTodoTexte(e.target.value);
  // }

  const ajouter = () => {
    const newTodo = { id: todos.length + 1, texte: texteRef.current.value };
    // setTodos([...todos, newTodo]);
    setTodos(prevState => [...prevState, newTodo]);
  }

  return (  
    <div className="todo">
    <NavBar></NavBar>
      <div className="todos_list">

        <div className="nouvelle_tache">
          <input type="text" ref={texteRef} />
          <Button texte="Ajouter" onClick={ajouter}></Button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id} id={`todo-${todo.id}`}>
              {todo.texte}{" "}
              <Button onClick={() => supprimer(todo.id)} texte="Supprimer" />
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Todo;
