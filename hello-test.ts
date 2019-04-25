import {expect} from 'chai'
import {registerCustomMethods} from "./customMethods";

registerCustomMethods();

describe('hello', () => {
  it('should give hello words to given name', () => {
    expect('      Hello ').trimmed.to.equal('Hello');
  })
})

