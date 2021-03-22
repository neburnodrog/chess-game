import React from "react";
import styled from "styled-components";
import { Board } from "./components/Board";

const GameStyle = styled.div`
  width: 80%;
  margin: auto;
`;

export const Game: React.FC = () => {
  return (
    <GameStyle>
      <Board></Board>
    </GameStyle>
  );
};
