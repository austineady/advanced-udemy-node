const expect = require('expect');

const utils = require('./utils');

// Create test cases using it()

// It lets you define a new test case,
// and it takes two arguments
// first: a string describing what the test is doing
// second: a function that has code to test
it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.sqaure(10);

    expect(res).toBe(100).toBeA('number');
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({ name: 'Austin' }).toEqual({ name: 'Austin' });
    expect({ name: 'Daniel' }).toNotEqual({ name: 'Austin' });
    expect([2, 3, 4]).toInclude(2);
    expect([2, 3, 4]).toExclude(1);
    expect({
        name: 'Austin',
        age: 24,
        location: 'Charlotte'
    }).toInclude({
        age: 24
    });

    expect({
        name: 'Austin',
        age: 24,
        location: 'Charlotte'
    }).toExclude({
        age: 23
    });
});

it('should verify first and last names are set', () => {
    var testUser = { age: 24, location: 'Charlotte' };
    var res = utils.setName(testUser, 'Test Tester');

    expect(res).toInclude({
        firstName: 'Test',
        lastName: 'Tester'
    });
});