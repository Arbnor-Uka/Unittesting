  import {List, Set} from 'immutable';
  import * as chai from 'chai';
  import * as chaiImmutable from 'chai-immutable';

  chai.use(chaiImmutable);

  describe('chai immutable example', () => {
    it('example', () => {

      //to. gibt es anscheinend nicht in jest? habe es auch schon zu not.null usw abgeändert
      //Error:(10, 29) TS2339: Property 'to' does not exist on type 'JestMatchersShape<Matchers<void, Set<number>>, Matchers<Promise<void>, Set<number>>>'.

      expect(Set.of(1,2,3)).to.not.be.empty;
      expect(Set.of(1,2,3)).to.include(2);
      expect(Set.of(1,2,3)).to.include(5);
    })
  })
