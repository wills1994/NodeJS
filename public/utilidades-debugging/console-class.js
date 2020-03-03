const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

const consoleFile = new console.Console(out, err);

setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error(new Error("Ooops!"));
}, 2000);


/**
 * // %s
// %d
// %j
// console.log("Un %s y un %s", "perrito", "gatito");

// console.info("hello world");
// console.warn("hello error");

// console.assert(42 == "42");
// console.assert(42 === "42");

// console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("hello from foo");
NODE-DEV node file.js


const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('hello pluto')
}, 'pluto is deprecated. It is not a planet anymore');

helloPluto();

 */