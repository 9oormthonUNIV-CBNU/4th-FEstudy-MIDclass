import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import QuoteBox from "./components/QuoteBox";

const AppWrapper = styled.div`
  height: 90vh;
  box-sizing: border-box;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  height: calc(100% - 60px);
  display:flex;
  justify-content: space-between;
  gap: 60px;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <LeftSection>
          <TodoList />
        </LeftSection>
        <RightSection>
          <Timer />
          <QuoteBox />
        </RightSection>
      </Content>
    </AppWrapper>
  );
};

export default App;
