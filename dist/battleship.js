"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.battleship = void 0;
const helper_1 = require("./helper");
function battleship(gamedata) {
    const gameParams = gamedata.split("\n");
    let [battlegroundSize, battlegroundTotalShips, shipCoordForPlayerA, shipCoordForPlayerB, numOfMissiles, playerAMoves, playerBMoves] = gameParams;
    battlegroundSize = +battlegroundSize;
    battlegroundTotalShips = +battlegroundTotalShips;
    shipCoordForPlayerA = shipCoordForPlayerA.split(":").map((e) => e.split(","));
    shipCoordForPlayerB = shipCoordForPlayerB.split(":").map((e) => e.split(","));
    numOfMissiles = +numOfMissiles;
    playerAMoves = playerAMoves.split(":").map((e) => e.split(","));
    playerBMoves = playerBMoves.split(":").map((e) => e.split(","));
    const battleGround = helper_1.createBattlefield(battlegroundSize, shipCoordForPlayerA, shipCoordForPlayerB);
    return helper_1.getCompleteGameString(battleGround, playerAMoves, playerBMoves, numOfMissiles);
}
exports.battleship = battleship;
//# sourceMappingURL=battleship.js.map