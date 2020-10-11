"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//math.test.ts
var test = require("tape");
test("Math test", function (t) {
    t.equal(4, 2 + 2);
    t.true(5 > 2 + 2);
    t.end();
});
