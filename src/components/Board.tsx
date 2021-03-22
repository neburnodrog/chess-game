import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const BoardStyle = styled.div`
  height: 800px;
  width: 800px;
  border: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export type SquareStyleProps = {
  black: boolean;
};

export const SquareStyle = styled.button<SquareStyleProps>`
  height: 100px;
  width: 100px;
  border: 0px;
  background: ${({ black }) => (black ? "black" : "blanchedalmond")};
`;

export const Board = () => {
  const [board, setBoard] = useState(() => {
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8].map(String);
    const board = [];
    for (let file of files) {
      for (let rank of ranks) {
        board.push(`${file}${rank}`);
      }
    }
    return board;
  });

  const renderSquare = (index: number) => {
    return <SquareStyle key={index} black={index % 2 === 0}></SquareStyle>;
  };

  return (
    <BoardStyle>{board.map((s, index) => renderSquare(index))}</BoardStyle>
  );
};
