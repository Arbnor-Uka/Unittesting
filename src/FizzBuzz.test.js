"use strict";
//FizzBuzz.test.ts
/// <reference types="jest" />
Object.defineProperty(exports, "__esModule", { value: true });
var fizzBuzz_1 = require("./fizzBuzz");
test("FizzBuzz test", function () {
    expect(fizzBuzz_1.fizzBuzz(2)).toBe("1 2 ");
    expect(fizzBuzz_1.fizzBuzz(3)).toBe("1 2 Fizz ");
});
