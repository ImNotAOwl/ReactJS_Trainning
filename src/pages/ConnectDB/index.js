import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import InsertTodo from '../../components/InsertTodo';
import NavBar from '../../components/NavBar';

import './index.css';

const ConnectDB = () => {

    const [todos, setTodos] = useState();
    // const task_desc = useRef();
    // const attribute_to = useRef();


    const getTodos = async () => {
        const result = await axios.get('http://localhost:8000/api/todos/');
        setTodos(result.data.result);
        console.log(result.data.result);
    }

    useEffect(() => {
        getTodos();
        // console.log(task_desc.current);
    }, []);

    // const addTodo = async (e) => {
    //     e.preventDefault();
    //     const result = await axios.post('http://localhost:8000/api/todos/', {
    //         task_desc: task_desc.current.value,
    //         attribute_to: attribute_to.current.value
    //     })

    //     setTodos(prevstate => [...prevstate, result.data.result]);
    //     console.log(result);
    // }
    useEffect(() => {
        console.log(todos); // on consoleLog quand todos change
    }, [todos]);


    return (
        
        <div className='connect_db'>
            <NavBar></NavBar>
            <InsertTodo setTodos={setTodos}></InsertTodo>
            {/* <form className="form_insert_todo">
                <input type="text" placeholder='Tache ?' ref={task_desc} />
                <input type="text" placeholder='Attribuée à ?' ref={attribute_to} />
                <input type="submit" value="Insert" onClick={(e) => addTodo(e)} />
            </form> */}
            <ul className='todos_list'>
                { 
                    todos && todos.map(
                        (todo) => { 
                            return <li key={`todo-${todo.id}`}>{todo.task_desc} -- {todo.attribute_to}</li>
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default ConnectDB;