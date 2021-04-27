import { createBattlefield, getCompleteGameString } from "./helper";

export function battleship(gamedata) {

const gameParams = gamedata.split("\n");
let [
  battlegroundSize,
  battlegroundTotalShips,
  shipCoordForPlayerA,
  shipCoordForPlayerB,
  numOfMissiles,
  playerAMoves,
  playerBMoves
]: any = gameParams;
battlegroundSize = +battlegroundSize;
battlegroundTotalShips = +battlegroundTotalShips;
shipCoordForPlayerA = shipCoordForPlayerA.split(":").map((e) => e.split(","));
shipCoordForPlayerB = shipCoordForPlayerB.split(":").map((e) => e.split(","));
numOfMissiles = +numOfMissiles;
playerAMoves = playerAMoves.split(":").map((e) => e.split(","));
playerBMoves = playerBMoves.split(":").map((e) => e.split(","));

const battleGround = createBattlefield(
  battlegroundSize,
  shipCoordForPlayerA,
  shipCoordForPlayerB
);
return getCompleteGameString(battleGround, playerAMoves, playerBMoves, numOfMissiles);
}