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

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
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

    fetchQuote();
  }, []);

  return (
    <QuoteWrapper>
      “{quote}”<Author>- {author}</Author>
    </QuoteWrapper>
  );
};

export default QuoteBox;
