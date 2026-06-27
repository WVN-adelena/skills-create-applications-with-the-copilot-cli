const { add, subtract, multiply, divide } = require('../calculator');

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
