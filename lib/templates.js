"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.tpDict = {
    'vuePage': "vuePage"
};
var subprocess = require("child_process");
var BaseData = /** @class */ (function () {
    function BaseData() {
    }
    BaseData.prototype.appendBaseData = function (tb) {
        var gitName;
        var gitEmail;
        try {
            gitName = subprocess.execSync("git config user.name").toString().trim();
        }
        catch (e) { }
        try {
            gitEmail = subprocess.execSync("git config user.email").toString().trim();
        }
        catch (e) { }
        var now = new Date();
        var nowDate = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        return tslib_1.__assign(tslib_1.__assign({}, tb), { gitName: gitName, gitEmail: gitEmail, nowDate: nowDate });
    };
    return BaseData;
}());
exports.BaseData = BaseData;
