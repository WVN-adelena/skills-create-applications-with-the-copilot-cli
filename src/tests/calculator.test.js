const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

describe("calculator", () => {
  test("adds values", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts values", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies values", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("divides values", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("throws for division by zero", () => {
    expect(() => divide(20, 0)).toThrow("Division by zero");
  });

  test("calculates modulo", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("throws for modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero");
  });

  test("calculates power", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("calculates square root", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("throws for square root of a negative number", () => {
    expect(() => squareRoot(-16)).toThrow(
      "Square root of a negative number is not allowed"
    );
  });

  test("coerces numeric strings", () => {
    expect(add("2", "3")).toBe(5);
  });

  test("rejects invalid numbers", () => {
    expect(() => power("two", 3)).toThrow("Invalid number: two");
  });
});
