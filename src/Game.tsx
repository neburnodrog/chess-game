import React, { useState } from "react";
import styled from "styled-components";
import { Board } from "./components/Board";

// Forsyth-Edwards-Notation
const initialPosition =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const board = (() => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8].map(String);
  const boardArray = [];
  for (let file of files) {
    for (let rank of ranks) {
      boardArray.push(`${file}${rank}`);
    }
  }
  return boardArray;
})();

const GameStyle = styled.div`
  margin: auto;
  background: cornsilk;
`;

export const Game: React.FC = () => {
  const [position, setPosition] = useState(initialPosition);

  return (
    <GameStyle>
      <Board position={position} board={board}></Board>
    </GameStyle>
  );
};
