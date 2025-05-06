import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eee; /* 단색 (연회색 등) */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
  }
`;

const TodoListWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default TodoListWrapper;
