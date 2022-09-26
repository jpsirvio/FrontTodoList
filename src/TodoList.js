import React, {useState} from 'react';
import './App.css';

const TodoList = () => {
    
    console.log("-start----------------------------------------")
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {   
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const inputChanged = (event) => {  
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    return(
        <div>
            <h1>Simple Todolist</h1>
            <p>Add todo</p>
            Description: <input type="text" name="description" onChange={inputChanged} value={todo.description} />
            Date: <input type="text" name="date" onChange={inputChanged} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo,index) => 
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;