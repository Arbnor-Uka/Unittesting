"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var chai = require("chai");
var chaiImmutable = require("chai-immutable");
chai.use(chaiImmutable);
describe('chai immutable example', function () {
    it('example', function () {
        expect(immutable_1.Set.of(1, 2, 3)).to.not.be.empty;
        expect(immutable_1.Set.of(1, 2, 3)).to.include(2);
        expect(immutable_1.Set.of(1, 2, 3)).to.include(5);
    });
});
