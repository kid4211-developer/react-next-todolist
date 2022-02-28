// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";
import palette from "@styles/palette";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.deep_red};
  h1 {
    font-size: 14px;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Jerrynim's TodoList</h1>
    </Container>
  );
};

export default Header;
