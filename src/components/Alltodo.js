import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Alltodo.css'



function Alltodo() {
    const [alltodo, setAllTodo] = useState([])
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id, e) => {
        // e.preventDefault();
        try {
            const res = await axios.delete(`http://localhost:3005/deleteTodo/${id}`)
            console.log(res)
            setTodos(res.data.result)

        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    }

    const getAlltodo = async () => {
        try {
            const res = await axios.get('http://localhost:3005/getAlltodo')
            console.log(res)
            setAllTodo(res.data.result)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAlltodo()
    }, [])


return (


    <>

        {
           
            alltodo.map((todo) => {
                
                return (

                    <div className='row '>
                        <div className='col-2'></div>
                        <div className='col-8'>
                            <h5> <li className='todo'>
                                <span>{todo.title}</span>

                                <span className='icon' onClick={() => deleteTodo(todo.id)}><i className="fa-solid fa-trash"></i>
                                </span>


                            </li></h5>
                        </div>
                        <div className='col-2'></div>
                    </div>


                )
            })
        }
    </>
)
}

export default Alltodo