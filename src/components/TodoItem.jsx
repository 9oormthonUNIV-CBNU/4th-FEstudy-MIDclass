import React, { useState } from "react";
import styled from "styled-components";
import { ChevronRight } from "lucide-react";

const Item = styled.div`
  background: #f0f0f0;
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

  input {
    font-size: 14px;
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
  }

  .title {
    font-weight: bold;
    word-break: break-word;
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

const TodoItem = ({ id, title, onUpdate, onDelete }) => {
  const [edit, setEdit] = useState(false);

  const handleClick = () => setEdit(true);
  const handleChange = (e) => onUpdate(id, e.target.value);
  const handleBlur = () => setEdit(false);

  return (
    <Item onClick={handleClick}>
      <DeleteButton
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        ✕
      </DeleteButton>

      <TextBlock>
        {edit ? (
          <input
            type="text"
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="title">{title}</div>
        )}
      </TextBlock>

      <ChevronRight />
    </Item>
  );
};

export default TodoItem;
