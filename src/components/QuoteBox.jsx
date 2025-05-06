import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuoteWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  font-style: italic;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Author = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #888;
`;

// 명언을 가져오는 함수는 미리 구현되어 있습니다.
const fetchQuote = async (setQuote, setAuthor) => {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
    setAuthor(data.author);
  } catch (error) {
    console.error("명언 불러오기 실패:", error);
    setQuote("실패는 성공의 어머니입니다.");
    setAuthor("FocusFlow");
  }
};

const QuoteBox = () => {
  // 1. 명언과 작가를 저장할 상태를 선언하세요
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  

  // 2. useEffect를 사용하여 컴포넌트가 마운트될 때 fetchQuote를 실행하세요
  useEffect(()=>{
    fetchQuote(setQuote, setAuthor)
  },[])

  return (
    <QuoteWrapper>
      “{quote}”
      <Author>- {author}</Author>
    </QuoteWrapper>
  );
};

export default QuoteBox;
