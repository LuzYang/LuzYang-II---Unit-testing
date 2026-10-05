// main.js
const mylib = require('./mylib');

console.log("=== Testing mylib functions ===");

console.log("Addition (5 + 3):", mylib.add(5, 3));
console.log("Subtraction (10 - 4):", mylib.subtract(10, 4));
console.log("Multiplication (6 * 7):", mylib.multiply(6, 7));
console.log("Division (20 / 4):", mylib.divide(20, 4));

// 演示零除法错误处理（使用 try-catch 防止程序崩溃）
try {
    console.log("Division by zero (10 / 0):");
    mylib.divide(10, 0);
} catch (error) {
    console.log("Caught an error:", error.message);
}
