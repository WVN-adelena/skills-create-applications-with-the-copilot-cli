#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add: addition (sum two or more numbers)
// - subtract: subtraction (subtract one number from another)
// - multiply: multiplication (multiply two or more numbers)
// - divide: division (divide one number by another; division by zero is handled)
// - mod: modulo (remainder)
// - pow: exponentiation (base ** exponent)
// - sqrt: square root (with error for negative input)

function parseNumbers(args) {
  return args.map((a) => {
    const n = Number(a);
    if (Number.isNaN(n)) {
      throw new Error(`Invalid number: ${a}`);
    }
    return n;
  });
}

function ensureNumbers(arr) {
  const nums = arr.map((v) => {
    const n = Number(v);
    if (Number.isNaN(n)) throw new Error(`Invalid number: ${v}`);
    return n;
  });
  return nums;
}

function add(...nums) {
  const values = ensureNumbers(nums);
  return values.reduce((s, n) => s + n, 0);
}

function subtract(a, b) {
  const [x, y] = ensureNumbers([a, b]);
  return x - y;
}

function multiply(...nums) {
  const values = ensureNumbers(nums);
  return values.reduce((p, n) => p * n, values.length ? 1 : 0);
}

function divide(a, b) {
  const [x, y] = ensureNumbers([a, b]);
  if (y === 0) throw new Error('Division by zero');
  return x / y;
}

// New functions requested
function modulo(a, b) {
  const [x, y] = ensureNumbers([a, b]);
  if (y === 0) throw new Error('Modulo by zero');
  return x % y;
}

function power(base, exponent) {
  const [b, e] = ensureNumbers([base, exponent]);
  return Math.pow(b, e);
}

function squareRoot(n) {
  const [x] = ensureNumbers([n]);
  if (x < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(x);
}

// CLI entry
if (require.main === module) {
  const [, , cmd, ...rest] = process.argv;
  try {
    if (!cmd) {
      console.error('Usage: node calculator.js <operation> <numbers...>');
      process.exit(2);
    }

    let result;
    switch (cmd) {
      case 'add': {
        const nums = parseNumbers(rest);
        result = add(...nums);
        break;
      }
      case 'subtract': {
        if (rest.length < 2) throw new Error('subtract requires two numbers');
        const [a, b] = parseNumbers(rest.slice(0, 2));
        result = subtract(a, b);
        break;
      }
      case 'multiply': {
        const nums = parseNumbers(rest);
        result = multiply(...nums);
        break;
      }
      case 'divide': {
        if (rest.length < 2) throw new Error('divide requires two numbers');
        const [a, b] = parseNumbers(rest.slice(0, 2));
        result = divide(a, b);
        break;
      }
      case 'mod':
      case 'modulo': {
        if (rest.length < 2) throw new Error('mod requires two numbers');
        const [a, b] = parseNumbers(rest.slice(0, 2));
        result = modulo(a, b);
        break;
      }
      case 'pow':
      case 'power': {
        if (rest.length < 2) throw new Error('pow requires two numbers');
        const [a, b] = parseNumbers(rest.slice(0, 2));
        result = power(a, b);
        break;
      }
      case 'sqrt':
      case 'squareRoot':
      case 'square-root': {
        if (rest.length < 1) throw new Error('sqrt requires one number');
        const [a] = parseNumbers(rest.slice(0, 1));
        result = squareRoot(a);
        break;
      }
      default:
        throw new Error(`Unknown operation: ${cmd}`);
    }

    // Print result
    if (Number.isFinite(result)) {
      console.log(result);
    } else {
      console.log(String(result));
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Export functions for programmatic use / testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
