"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const battleship_1 = require("./battleship");
const filePath = "assets";
fs_1.readFile(filePath + "/gamedata.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const output = battleship_1.battleship(data.toString());
    fs_1.writeFile(filePath + "/output.txt", output, function (err) {
        if (err)
            throw err;
        console.log("Saved! Check assets/output.txt");
    });
});
//# sourceMappingURL=app.js.map