import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import NavBar from '../../components/NavBar';

import './index.css';

const ConnectDB = () => {

    const [todos, setTodos] = useState();

    const getTodos = async () => {
        const result = await axios.get('http://localhost:8000/api/todos/');
        setTodos(result.data.result);
        console.log(result.data.result);
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        
        <div className='connect_db'>
            <NavBar></NavBar>
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