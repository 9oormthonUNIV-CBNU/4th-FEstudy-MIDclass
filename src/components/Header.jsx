import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 60px 0;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 20px;
  color: #44bf9e;
  flex: 1;
`;

const Address = styled.div`
  font-weight: 800;
  font-size: 15px;
  color: #acacac;
  text-align: center;
  flex: 1;
`;

const LoginButton = styled.div`
  font-size: 12px;
  color: #acacac;
  cursor: pointer;
  text-align: right;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Name>STARTandGO</Name>
      <Address>cbnu groomthon univ. FE MIDclass</Address>
      <LoginButton>로그인</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;
