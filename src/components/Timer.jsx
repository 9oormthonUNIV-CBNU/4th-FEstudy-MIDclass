import React, { /* 여기에 필요한 Hook들을 import 하세요 */ } from "react";
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

  // 2. setInterval ID를 저장할 ref를 선언하세요

  // 3. useEffect를 사용해 타이머를 시작하고,
  //    시간이 0이 되면 멈추도록 로직을 작성하세요.
	
	const formatTime = (seconds) => {
	  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
	  const s = String(seconds % 60).padStart(2, "0");
	  return `${m}:${s}`;
	};
	
  return (
    <TimerWrapper>
      <TimeDisplay isDone={/* secondsLeft가 0이면 true */}>
        {/* secondsLeft가 0이면 "DONE!", 아니면 formatTime(secondsLeft) */}
      </TimeDisplay>
    </TimerWrapper>
  );
};

export default Timer;
