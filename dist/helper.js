"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompleteGameString = exports.createBattlefield = void 0;
const TERRITORY = {
    PLAYER_A: 1,
    PLAYER_B: 0,
    NO_ONE: -1
};
function BattleBlock() {
    return {
        territory: TERRITORY.NO_ONE,
        attacked: false,
        ships: 0,
        attackedBy: []
    };
}
function createBattlefield(battlegroundSize, shipCoordForPlayerA, shipCoordForPlayerB) {
    let battleGround = [];
    for (let i = 0; i < battlegroundSize; i++) {
        const row = [];
        for (let j = 0; j < battlegroundSize; j++) {
            row.push(BattleBlock());
        }
        battleGround.push(row);
    }
    for (let x = 0; x < shipCoordForPlayerA.length; x++) {
        battleGround[shipCoordForPlayerA[x][0]][shipCoordForPlayerA[x][1]].territory = TERRITORY.PLAYER_A;
        ++battleGround[shipCoordForPlayerA[x][0]][shipCoordForPlayerA[x][1]].ships;
        battleGround[shipCoordForPlayerB[x][0]][shipCoordForPlayerB[x][1]].territory = TERRITORY.PLAYER_B;
        ++battleGround[shipCoordForPlayerB[x][0]][shipCoordForPlayerB[x][1]].ships;
    }
    return battleGround;
}
exports.createBattlefield = createBattlefield;
function getPlayerString(battleGround, territoryId) {
    let playerString = "";
    if (territoryId === TERRITORY.PLAYER_A) {
        playerString += "Player1\n";
    }
    else {
        playerString += "Player2\n";
    }
    let loss = 0;
    for (let i = 0; i < battleGround.length; i++) {
        const fleet = battleGround[i];
        const line = [];
        for (let j = 0; j < fleet.length; j++) {
            const { str, hits } = denoteBlock(fleet[j], territoryId, loss);
            // console.log(i,","+j, "  : ", fleet[j], territoryId, ">", str, hits );
            loss = hits;
            line.push(str);
        }
        playerString += line.join(" ");
        playerString += "\n";
    }
    return { playerString, loss };
}
function denoteBlock(block, territoryId, hits) {
    if (block.attacked) {
        if (block.territory === TERRITORY.NO_ONE &&
            block.attackedBy.some((attackerId) => attackerId === territoryId)) {
            return { str: "O", hits };
        }
        if (block.territory === territoryId) {
            return { str: "X", hits: ++hits };
        }
        return { str: "_", hits };
    }
    else {
        if (block.territory === territoryId) {
            return { str: "B", hits };
        }
        return { str: "_", hits }; // missed battleship
    }
}
function getCompleteGameString(battleGround, movesA, movesB, missiles) {
    for (let i = 0; i < movesA.length; i++) {
        battleGround[movesA[i][0]][movesA[i][1]].attacked = true;
        battleGround[movesA[i][0]][movesA[i][1]].attackedBy.push(TERRITORY.PLAYER_A);
        // --battleGround[movesA[i][0]][movesA[i][1]].ships;
        battleGround[movesB[i][0]][movesB[i][1]].attacked = true;
        battleGround[movesB[i][0]][movesB[i][1]].attackedBy.push(TERRITORY.PLAYER_B);
        // --battleGround[movesB[i][0]][movesB[i][1]].ships;
    }
    let outString = "";
    const playerAResponse = getPlayerString(battleGround, TERRITORY.PLAYER_A);
    const playerBResponse = getPlayerString(battleGround, TERRITORY.PLAYER_B);
    outString += playerAResponse.playerString;
    outString += playerBResponse.playerString;
    // console.log(playerAResponse)
    outString += "P1:" + playerBResponse.loss + "\n";
    outString += "P2:" + playerAResponse.loss + "\n";
    if (playerAResponse.loss === playerBResponse.loss) {
        outString += "It is a draw";
    }
    else if (playerAResponse.loss > playerBResponse.loss) {
        outString += "Player 2 wins";
    }
    else {
        outString += "Player 1 wins";
    }
    return outString;
}
exports.getCompleteGameString = getCompleteGameString;
//# sourceMappingURL=helper.js.map