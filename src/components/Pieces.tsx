import styled from "styled-components";
import * as React from "react";
import PieceMapping from "./helper_funcs/pieceMappings";

type PieceImgProps = {
  isWhite: boolean;
};

const PieceImg = styled.img<PieceImgProps>`
  width: 100%;
  height: 100%;
  padding: 2px;
  ${(props) =>
    props.isWhite ? "filter: invert(100%);" : "filter: invert(0%);"};
`;

export type PieceProps = {
  pieceType: string;
};

export const Piece: React.FC<PieceProps> = ({ pieceType }) => {
  const path = PieceMapping.get(pieceType.toLowerCase());
  const isWhite = pieceType === pieceType.toUpperCase();
  return (
    <PieceImg
      isWhite={isWhite}
      src={path}
      alt={pieceType === "-" ? " " : pieceType}
    />
  );
};
