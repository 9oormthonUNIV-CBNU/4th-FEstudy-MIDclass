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

  // 항목 추가 함수
  const addTodo = () => {
    const newTodo = {
      id: Date.now(),// 고유 ID 생성(현재 시각)
      title: "새로운 항목",//새 항목의 이름(고정값)
      completed: false,// 완료 여부(처음엔 항상 false)
    };
    setTodos([...todos, newTodo]);//...todos는 현재까지의 할 일 목록들의 배열,newTodo는 새로 추가할 항목
  };


  // 항목 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    //filtter는 todos 배열에서 id가 일치하지 않는 항목들만 남겨서 새로운 배열을 생성
  };

  // 완료 토글 함수
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>//map()은 배열의 각 요소를 순회하면서 변경된 새 배열을 반환
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
      //현재 순회 중인 항목이 사용자가 클릭한 항목이라면 기존 todo를 복사해서 comleted 값을 반대로 바꿈,그렇지 않으면 그대로 유지
    );
    setTodos(updatedTodos);
  };

  return (
    <TodoListWrapper>
      <AddButton onClick={addTodo}>+</AddButton>{/* 항목 추가 버튼(onClick 핸들링) */}

      {todos.map((todo) => (//todo 하나하나를 화면에 컴포넌트처럼 보여주는 반복 렌더링
        <Item
          key={todo.id}// 각 항목의 고유 ID구분(필수)
          completed={todo.completed}// 완료 여부에 따라 스타일 변경
          onClick={() => toggleCompleted(todo.id)}// 클릭 시 상태 변경
        >
          <DeleteButton
            onClick={(e) => {
              e.stopPropagation();// 부모 요소 (Item)의 클릭 이벤트가 실행되지 않도록 막음
              deleteTodo(todo.id);// 항목 삭제
            }}
          >
            ✕
          </DeleteButton>
          
          <TextBlock completed={todo.completed}>{/* styled-components에서 텍스트 색상 등을 조절하기 위한 속성 전달 */}
            <div className="title">{todo.title}</div>
            {todo.completed && (//todo.completed가 true일 때만 조건부 렌더링
              <div className="completed-msg">완료된 항목입니다</div>
            )}
          </TextBlock>

          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}//체크 상태 바뀔 때 toggleCompleted 실행
            onClick={(e) => e.stopPropagation()}
          />
        </Item>
      ))}
    </TodoListWrapper>
  );
};

export default TodoApp;
