"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var watch_dir_1 = require("./watch-dir");
var path = require("path");
var argvs = process.argv;
var dir = argvs[2];
if (dir) {
    var m = new watch_dir_1.ManageTempalteWatchDir();
    m.watch(path.resolve(dir));
}
