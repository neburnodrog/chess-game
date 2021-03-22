import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const BoardStyle = styled.div`
  height: 400px;
  width: 400px;
  border: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  margin: auto;
`;

export type SquareStyleProps = {
  black: boolean;
};

export const SquareStyle = styled.button<SquareStyleProps>`
  height: 50px;
  width: 50px;
  border: 0px;
  background: ${({ black }) => (black ? "#c48830" : "#e6c981")};
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
    const Columns = "ABCDEFGH";
    const Column = Columns[index % 8];
    const Rank = Math.floor(index / 8);
    const isEvenRank = Boolean(Rank % 2);

    return (
      <SquareStyle
        key={`${Column}${Rank + 1}`}
        black={isEvenRank ? index % 2 !== 0 : index % 2 === 0}
        id={`${Column}${Rank + 1}`}
      ></SquareStyle>
    );
  };

  return (
    <BoardStyle>{board.map((s, index) => renderSquare(index))}</BoardStyle>
  );
};
