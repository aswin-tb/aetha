import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
let nextId = 0;

function Todo() {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);
    console.log(task);
    console.log(todo);
    const deleteTask=(todoDelete)=>{
        const newTodo=todo.filter(todo=>todo!==todoDelete)
        setTodo(newTodo)
    }
    const editTask=(todoEdit)=>{
        const newTodo=todo.filter(todo=>todo!==todoEdit)
        setTodo(newTodo)
    }
    return (
        <>
            <h1 className='text-center'>Todo App</h1>
            <div className="d-flex  justify-content-center ">
                <div className='w-50'>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Create Todo</label>
                            <input
                                type="text"
                                className="form-control"
                                value={task}
                                onChange={e => setTask(e.target.value)}

                            />
                        </div>
                        <button type="button" className="btn btn-primary w-100" onClick={() => {
                            setTodo([
                                ...todo,
                                { id: nextId++, task: task }
                            ]);
                        }}>Add</button>
                    </form>
                </div>
            </div>
            <div>
                {
                    todo.map(todos => (
                        <div className='m-5'><Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <h6>{todos.task}</h6>
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn btn-info' onClick={() => {editTask(todos)
                                    }}>Edit</button>
                                    <button className='btn btn-danger' 
                                    onClick={() => {deleteTask(todos)
                                    }}>Delete</button>
                                </div>
                            </Card.Body>
                        </Card></div>))

                }
            </div>
        </>
    )
}

export default Todo