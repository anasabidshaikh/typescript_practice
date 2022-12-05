"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// we may import singl variable from this syntax
const first_1 = __importDefault(require("./first"));
// we may import series of variable from this syntax
const second_1 = require("./second");
console.log(first_1.default + second_1.b + second_1.c);
