const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('addition: sum multiple numbers 1+2+3 = 6', () => {
    expect(add(1, 2, 3)).toBe(6);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplication: multiply multiple numbers 2*3*4 = 24', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero should throw', () => {
    expect(() => divide(5, 0)).toThrow(/Division by zero/);
  });

  test('invalid numbers passed to functions should behave via programmatic API', () => {
    // The exported functions expect numbers; ensure types aren't silently coerced to unexpected results
    expect(add(1, '2')).toBe(3); // JS coerces string to number in + when mixed, but our add expects numeric args, this is to document behavior
  });
});

// New tests for extended operations
describe('Calculator extended operations', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero should throw', () => {
    expect(() => modulo(5, 0)).toThrow(/Modulo by zero/);
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 = 0.5', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of negative number should throw', () => {
    expect(() => squareRoot(-9)).toThrow(/Cannot take square root of a negative number/);
  });
});
