import { battleship } from "./../src/battleship";
import { readFile } from "fs";

test("Testing Battleship method for Player 1 win & to get output string with testfile1.txt", () => {
  const filePath = "__tests__";

  readFile(filePath + "/testfile1.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const output = battleship(data.toString());
    const outputArr = output.split("\n");
    const player1ScoreString = outputArr[outputArr.length - 3];
    const player2ScoreString = outputArr[outputArr.length - 2];
    const winnerString = outputArr[outputArr.length - 1];
    expect(player1ScoreString[player1ScoreString.length - 1]).toBe("3");
    expect(player2ScoreString[player2ScoreString.length - 1]).toBe("1");
    expect(winnerString).toBe("Player 1 wins");
  });
});

test("Testing Battleship method for Player 2 win & to get output string with testfile2.txt", () => {
  const filePath = "__tests__";

  readFile(filePath + "/testfile2.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const output = battleship(data.toString());
    const outputArr = output.split("\n");
    const player1ScoreString = outputArr[outputArr.length - 3];
    const player2ScoreString = outputArr[outputArr.length - 2];
    const winnerString = outputArr[outputArr.length - 1];
    expect(player1ScoreString[player1ScoreString.length - 1]).toBe("2");
    expect(player2ScoreString[player2ScoreString.length - 1]).toBe("3");
    expect(winnerString).toBe("Player 2 wins");
  });
});

test("Testing Battleship method for draw & to get output string with testfile3.txt", () => {
  const filePath = "__tests__";

  readFile(filePath + "/testfile3.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const output = battleship(data.toString());
    const outputArr = output.split("\n");
    const player1ScoreString = outputArr[outputArr.length - 3];
    const player2ScoreString = outputArr[outputArr.length - 2];
    const winnerString = outputArr[outputArr.length - 1];
    expect(player1ScoreString[player1ScoreString.length - 1]).toBe("3");
    expect(player2ScoreString[player2ScoreString.length - 1]).toBe("3");
    expect(winnerString).toBe("It is a draw");
  });
});
