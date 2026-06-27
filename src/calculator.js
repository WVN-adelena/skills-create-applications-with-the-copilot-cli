#!/usr/bin/env node

// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - power
// - square root

function ensureNumbers(values) {
  return values.map((value) => {
    const number = Number(value);

    if (Number.isNaN(number)) {
      throw new Error(`Invalid number: ${value}`);
    }

    return number;
  });
}

function add(...values) {
  const numbers = ensureNumbers(values);
  return numbers.reduce((sum, value) => sum + value, 0);
}

function subtract(a, b) {
  const [minuend, subtrahend] = ensureNumbers([a, b]);
  return minuend - subtrahend;
}

function multiply(...values) {
  const numbers = ensureNumbers(values);
  return numbers.reduce((product, value) => product * value, 1);
}

function divide(a, b) {
  const [dividend, divisor] = ensureNumbers([a, b]);

  if (divisor === 0) {
    throw new Error("Division by zero");
  }

  return dividend / divisor;
}

function modulo(a, b) {
  const [dividend, divisor] = ensureNumbers([a, b]);

  if (divisor === 0) {
    throw new Error("Modulo by zero");
  }

  return dividend % divisor;
}

function power(base, exponent) {
  const [baseValue, exponentValue] = ensureNumbers([base, exponent]);
  return baseValue ** exponentValue;
}

function squareRoot(value) {
  const [number] = ensureNumbers([value]);

  if (number < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }

  return Math.sqrt(number);
}

const operations = {
  add: (args) => add(...args),
  subtract: ([a, b]) => subtract(a, b),
  multiply: (args) => multiply(...args),
  divide: ([a, b]) => divide(a, b),
  modulo: ([a, b]) => modulo(a, b),
  power: ([base, exponent]) => power(base, exponent),
  sqrt: ([value]) => squareRoot(value),
  "square-root": ([value]) => squareRoot(value),
  squareRoot: ([value]) => squareRoot(value),
};

if (require.main === module) {
  const [command, ...args] = process.argv.slice(2);

  if (!command || !operations[command]) {
    console.error(
      "Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <numbers...>"
    );
    process.exit(1);
  }

  try {
    const result = operations[command](args);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};
