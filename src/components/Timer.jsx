import React, { useEffect, useState, useRef } from "react";
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
  const [secondsLeft, setSecondsLeft] = useState(300); // 5분
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <TimerWrapper>
      <TimeDisplay isDone={secondsLeft === 0}>
        {secondsLeft === 0 ? "DONE!" : formatTime(secondsLeft)}
      </TimeDisplay>
    </TimerWrapper>
  );
};

export default Timer;
