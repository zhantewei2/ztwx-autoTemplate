"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tpDict = {
    'vuePage': "vuePage"
};
const subprocess = require("child_process");
class BaseData {
    constructor() {
    }
    appendBaseData(tb) {
        let gitName;
        let gitEmail;
        try {
            gitName = subprocess.execSync("git config user.name").toString().trim();
        }
        catch (e) { }
        try {
            gitEmail = subprocess.execSync("git config user.email").toString().trim();
        }
        catch (e) { }
        const now = new Date();
        const nowDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        return Object.assign(Object.assign({}, tb), { gitName: gitName, gitEmail: gitEmail, nowDate });
    }
}
exports.BaseData = BaseData;
