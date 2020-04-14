#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const watch_dir_1 = require("./watch-dir");
const path = require("path");
const argvs = process.argv;
const dir = argvs[2];
if (dir) {
    const m = new watch_dir_1.ManageTempalteWatchDir();
    m.watch(path.resolve(dir));
}
