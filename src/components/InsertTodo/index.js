import axios from 'axios';
import { useRef } from 'react';
import './index.css';


const InsertTodo = ({setTodos}) => {

    const task_desc = useRef();
    const attribute_to = useRef();
    const statusTask = useRef();
    console.log(task_desc);

    const addTodo = async (e) => {
        e.preventDefault();  // annule le refresh par défaut au click du submit
        const result = await axios.post('http://localhost:8000/api/todos/', {
            task_desc: task_desc.current.value,
            attribute_to: attribute_to.current.value
        })
         
        setTodos(prevstate => [...prevstate, result.data.result]);
        console.log(statusTask);

        statusTask.current.innerText = result.data.success;
        task_desc.current.value = "";
        task_desc.current.focus();
        attribute_to.current.value = "";
    }

    const cleanStatus = () => {
        statusTask.current.innerText = "";
    }

    return (
        <>
            <div className="content">
                <form className="form_insert_todo">
                    <input type="text" ref={task_desc} onChange={cleanStatus}/>
                    <input type="text" ref={attribute_to} onChange={cleanStatus}/>
                    <input type="submit" value="Insert" onClick={(e) => addTodo(e)} />
                    <p ref={statusTask}></p>
                </form>
            </div>
        </>
    )

};

export default InsertTodo;