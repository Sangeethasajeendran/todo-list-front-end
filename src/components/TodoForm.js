import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import './TodoForm.css'
import uuid from 'react-uuid';
import axios from 'axios';

function TodoForm() {

    const url="http://localhost:3005/saveTodo";

   
        const [todo,setTodo] = useState('')
    
        const ids = uuid()
    let uniqueId = ids.slice(0, 8)


    const onFormSubmit = async (e) => {
             e.preventDefault();
            // todolis()
            console.log(todo);
            try{
                const res = await axios.post(url,{id:uniqueId,todo:todo});
                console.log(res.data);
            }catch(error){
                console.log(error);
            }
            setTodo('')
            window.location.reload();
    }

   
    return (
        <div className='row mt-5 '>
            <div className='col-2'></div>
            <div className='col-8'>
                <Form className='form ' onSubmit={onFormSubmit}>
                    <input
                        placeholder='Enter new todo..'
                        className='input' value={todo} onChange={(e)=>setTodo(e.target.value)}
                    />
                </Form>
            </div>
            <div className='col-2'></div>
        </div>
    )
}

export default TodoForm