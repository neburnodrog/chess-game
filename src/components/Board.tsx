import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { parsePosition } from "./helper_funcs/parseFenString";
import { Piece } from "./Pieces";

export const BoardStyle = styled.div`
  height: 400px;
  width: 400px;
  border: 10px solid #000000;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  margin: auto;
  border-radius: 10px;
`;

export type SquareStyleProps = {
  black: boolean;
};

export const SquareStyle = styled.button<SquareStyleProps>`
  height: 50px;
  width: 50px;
  border: 0px;
  padding: 0px 3px;
  background: ${({ black }) => (black ? "#c48830" : "#e6c981")};
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export type BoardProps = {
  fenString: string;
  board: string[];
};

export const Board: React.FC<BoardProps> = ({ fenString, board }) => {
  const positions = parsePosition(fenString);

  const renderSquare = (index: number) => {
    const Columns = "ABCDEFGH";
    const Column = Columns[index % 8];
    const Rank = Math.floor(index / 8);
    const isEvenRank = Boolean(Rank % 2);

    const position = positions[index];

    return (
      <SquareStyle
        key={`${Column}${Rank + 1}`}
        black={isEvenRank ? index % 2 !== 0 : index % 2 === 0}
        id={`${Column}${Rank + 1}`}
      >
        {/^\d$/.test(position) ? "" : <Piece pieceType={position}></Piece>}
      </SquareStyle>
    );
  };

  return (
    <BoardStyle>{board.map((s, index) => renderSquare(index))}</BoardStyle>
  );
};
