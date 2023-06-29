import logo from './platzi.webp';
import './App.css';
import { ToDoItem } from '../src/ToDoItem/ToDoItem';
import { ToDoCounter } from './ToDoCounter/ToDoCounter';
import { ToDoSearch } from './ToDoSearch/ToDoSearch';
import { ToDoList } from './ToDoList/ToDoList';
import { ToDoHeader } from './header/ToDoHeader';
import { ToDoButton } from './CreateToDoButton/ToDoButton';
import React from 'react';

const defaultToDo = [
  { text:'Cook', completed: true },
  { text:'Study', completed: true },
  { text:'Sleep', completed: true },
  { text:'Gaming', completed: true }
]

function App() {
  return (
    <>
      <ToDoHeader/>
      <ToDoSearch/>
      <ToDoList>
        {defaultToDo.map(todo => (
          <ToDoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          
          />
        ))}
      </ToDoList>
      <ToDoButton />
      <ToDoCounter completed={3} total={5}/>
    </>
  );
}

export default App;

