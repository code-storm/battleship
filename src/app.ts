import { readFile, writeFile } from "fs";
import { battleship } from "./battleship";
const filePath = "assets";

readFile(filePath + "/gamedata.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const output = battleship(data.toString());
    writeFile(filePath + "/output.txt", output, function (err) {
        if (err) throw err;
        console.log("Saved! Check assets/output.txt");
    });
});
