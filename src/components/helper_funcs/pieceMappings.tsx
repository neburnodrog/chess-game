import BishopPath from "../../images/icons8-bishop-100.png";
import KingPath from "../../images/icons8-king-100.png";
import KnightPath from "../../images/icons8-knight-100.png";
import PawnPath from "../../images/icons8-pawn-100.png";
import QueenPath from "../../images/icons8-queen-100.png";
import RookPath from "../../images/icons8-rook-100.png";

const piecesMapping = new Map<string, string>();
const piecesArr = ["p", "n", "b", "r", "q", "k"];
for (let piece of piecesArr) {
  if (piece === "p") {
    piecesMapping.set("p", PawnPath);
  }
  if (piece === "n") {
    piecesMapping.set("n", KnightPath);
  }
  if (piece === "b") {
    piecesMapping.set("b", BishopPath);
  }
  if (piece === "r") {
    piecesMapping.set("r", RookPath);
  }
  if (piece === "q") {
    piecesMapping.set("q", QueenPath);
  }
  if (piece === "k") {
    piecesMapping.set("k", KingPath);
  }
}

export default piecesMapping;
