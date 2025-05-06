import React, { useState } from "react";
import styled from "styled-components";

// 스타일 정의
const TodoListWrapper = styled.div`
  margin: 0 auto;
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
  }
`;

const Item = styled.div`
  background: ${(props) => (props.completed ? "#d0f0c0" : "#f0f0f0")};
  border-radius: 15px;
  padding: 16px 20px;
  margin-bottom: 16px;
  margin-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBlock = styled.div`
  width: 100%;
  font-size: 14px;
  margin-left: 10px;

  .title {
    font-weight: bold;
    word-break: break-word;
    color: ${(props) => (props.completed ? "#7a7a7a" : "#000")};
  }

  .completed-msg {
    font-size: 12px;
    color: green;
    margin-top: 5px;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 12px;
  cursor: pointer;
  padding: 5;

  &:hover {
    color: #d9363e;
  }
`;

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

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "입력해주세요", completed: false },
  ]);

  // ✅ 항목 추가 함수 (Date.now()로 고유 id 만들기)
  const addTodo = () => {
    const title = window.prompt("새 할일을 입력하세요");
    if (!title) return;
    setTodos([
      ...todos,
      { id: Date.now(), title: title.trim(), completed: false},
    ]);
  }

  // 항목 삭제 함수 (filter 사용)
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))

  }

  // 완료 토글 함수 (map + 삼항 연산자 사용)
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // 렌더링되는 todos 배열을 콘솔에 출력해서 확인
  console.log("Current todos:", todos);

  return (
    <TodoListWrapper>
      {/* ✅ 항목 추가 버튼 (onClick 핸들링) */}
      <AddButton onClick={addTodo}>+</AddButton>

      {/* 리스트 반복 렌더링 (map 사용 + key 지정 필수) */}
      {todos.map((todo) => (
        <Item key={todo.id} completed={todo.completed}>
          {/* ✅ 삭제 버튼 (e.stopPropagation(), onClick 핸들링) */}
          <DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
          >
            ✕
          </DeleteButton>

          {/* ✅ 텍스트 영역 : title이 뜨도록 수정 */}
          <TextBlock completed={todo.completed}>
            <div className="title">{todo.title}</div>
            {todo.completed && (<div className="completed-msg">완료되었습니다!</div>)}
          </TextBlock>

          {/* ✅ 체크박스: checked 속성 + onChange 이벤트 처리 */}
          <input type="checkbox" checked={todo.completed}  onChange={() => toggleCompleted(todo.id)}/>
        </Item>
      ))}
    </TodoListWrapper>
  );
};

export default TodoApp;
