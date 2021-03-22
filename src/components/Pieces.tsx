import styled from "styled-components";
import BishopPath from "../images/icons8-bishop-100.png";
import KingPath from "../images/icons8-king-100.png";
import KnightPath from "../images/icons8-knight-100.png";
import PawnPath from "../images/icons8-pawn-100.png";
import QueenPath from "../images/icons8-queen-100.png";
import RookPath from "../images/icons8-rook-100.png";

const PieceContainer = styled.div``;

export const Bishop: React.FC = () => {
  return <PieceContainer>{BishopPath}</PieceContainer>;
};

export const Knight: React.FC = () => {
  return <PieceContainer>{KnightPath}</PieceContainer>;
};

export const Rook: React.FC = () => {
  return <PieceContainer>{RookPath}</PieceContainer>;
};

export const King: React.FC = () => {
  return <PieceContainer>{KingPath}</PieceContainer>;
};

export const Queen: React.FC = () => {
  return <PieceContainer>{QueenPath}</PieceContainer>;
};

export const Pawn: React.FC = () => {
  return <PieceContainer>{PawnPath}</PieceContainer>;
};
