import React, { useState } from "react";
import TodoListWrapper from "./TodoListWrapper";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const AddButton = styled.button`
  margin-bottom: 20px;
  background-color: none;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background-color: rgb(136, 224, 180);
  }
`;

const TodoList = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "입력해주세요" }]);

  const addTodo = () => {
    const newId = Date.now();
    setTodos([...todos, { id: newId, title: "입력해주세요" }]);
  };

  const updateTodo = (id, value) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, title: value } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoListWrapper>
      <AddButton onClick={addTodo}>+</AddButton>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
