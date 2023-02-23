import { Container, List } from '@mui/material';
import * as React from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { useState } from "react"

export default function HomePg() {
    const[todos, setTodos] = useState([])
    const addTodo = (todo) =>{
        setTodos([...todos, todo]);
    };
    const deleteTodo = (id) =>{
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

    const editar = (id, editedText) =>{
        var todosArray = [...todos];

        for (var i in todosArray){
            if (todosArray[i] === id) {
                todosArray[i].text = editedText;
            }
        };

        setTodos(todosArray);
    }
    return(
        <Container maxWidth="xs" style={{ marginTop:"1em" }}>
        <Form addTodo={addTodo}/>
        <List sx={{marginTop: "1em"}}>
        {todos.map((todo) => (
        <div key={todo.id} style={{ marginTop:"1em" }}>
            <TodoItem editar={editar} todo={ todo } deleteTodo={ deleteTodo } />
        </div>
        ))};
        </List>
        </Container>
    )
}