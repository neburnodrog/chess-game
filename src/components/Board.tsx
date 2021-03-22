import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const BoardStyle = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid black;
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

export type BoardProps = {
  position: string;
  board: string[];
};

export const Board: React.FC<BoardProps> = ({ position, board }) => {
  const renderPiece = (index: number) => {};

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
      >
        {renderPiece(index)}{" "}
      </SquareStyle>
    );
  };

  return (
    <BoardStyle>{board.map((s, index) => renderSquare(index))}</BoardStyle>
  );
};
