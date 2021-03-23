export function parsePosition(FenString: string): string[] {
  const boardString = FenString.split(" ")[0].split("/").join("");
  const positions = boardString.split("");
  return positions;
}

export function parseActiveColor(FenString: string): string {
  const activeColor = FenString.split(" ")[1];
  return activeColor;
}

export function parseCastlingRights(FenString: string): string {
  const castlingRights = FenString.split(" ")[2];
  return castlingRights;
}

export function parseEnPassant(FenString: string) {
  const enPassantTargets = FenString.split(" ")[3];
  return enPassantTargets;
}

export function parseHalfClock(FenString: string) {
  const halfClock = FenString.split(" ")[1];
  return halfClock;
}

export function parseCompleteTurns(FenString: string) {
  const completeTurns = FenString.split(" ")[1];
  return completeTurns;
}
