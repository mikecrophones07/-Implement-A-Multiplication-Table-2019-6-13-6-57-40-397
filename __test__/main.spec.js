const main = require('../main');

it ('should start number is less than end number', () => {
    expect(main.validateParameters(2, 4)).toBe(true);
});

it ('should start number is equal end number', () => {
    expect(main.validateParameters(2, 4)).toBe(true);
});

it ('should start number is greater end number', () => {
    expect(main.validateParameters(5, 4)).toBe(null);
});

it ('should start and end is between 1 and 1000', () => {
    expect(main.validateRange(5, 4)).toBe(true);
});

it ('should start and end is not between 1 and 1000', () => {
    expect(main.validateRange(1001, -4)).toBe(false);
});

it ('should formulate Multiplication Table', () => {
    expect(main.generateMultiplicationTable(2, 4)).toBe('2x2=4\n' +
        '2x3=6 3x3=9\n'+
        '2x4=8 3x4=12 4x4=16');
});

it ('should not formulate Multiplication Table', () => {
    expect(main.generateMultiplicationTable(7, 4)).toBe('Is Not Valid!');
});