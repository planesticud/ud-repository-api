/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */
module.exports = (fn) => (...args) => fn(...args).catch(args[2]);