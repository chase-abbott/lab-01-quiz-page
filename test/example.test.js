// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes, isNo } from './utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {

    const expected = true;
    // const actual = isYes(someString);

    //expect.equal(actual, expected);
    expect.equal(isYes('YES'), expected);
    expect.equal(isYes('yes'), expected);
    expect.equal(isYes('nah'), !expected);
    expect.equal(isYes('yellow'), expected);
    expect.equal(isYes('ya'), !expected);
    expect.equal(isNo('na'), expected);
    expect.equal(isNo('NO'), expected);
    expect.equal(isNo('ya'), !expected);
});
