import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
  background: #f7f7f7;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-top: 30px;
`;

const TimeDisplay = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ isDone }) => (isDone ? "#ff4d4f" : "#000")};
`;


const Timer = () => {
  // 1. secondsLeft 상태값을 정의하세요 (초기값: 300)
  const [secondsLeft, setSecondsLeft] = useState(300)
  // 2. setInterval ID를 저장할 ref를 선언하세요
  const id = useRef(null)
  // 3. useEffect를 사용해 타이머를 시작하고,
  //    시간이 0이 되면 멈추도록 로직을 작성하세요.
	useEffect(()=>{
    id.current = setInterval(() =>{
        setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(id.current); // ✅ .current 붙여야 함
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id.current);
  },[])
	const formatTime = (seconds) => {
	  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
	  const s = String(seconds % 60).padStart(2, "0");
	  return `${m}:${s}`;
	};
	
  return (
    <TimerWrapper>
      <TimeDisplay isDone={!secondsLeft? true: false}>
        {!secondsLeft? "DONE!": formatTime(secondsLeft)}
      </TimeDisplay>
    </TimerWrapper>
  );
};

export default Timer;
