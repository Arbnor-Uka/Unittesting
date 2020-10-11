import {List, Set} from 'immutable';
import * as chai from 'chai';
import * as chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

describe('chai immutable example', () => {
    it('example', () => {
        expect(Set.of(1,2,3)).to.not.be.empty;

        expect(Set.of(1,2,3)).to.include(2);
        expect(Set.of(1,2,3)).to.include(5);
    })
})
