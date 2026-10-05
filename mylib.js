// mylib.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        
        throw new Error("ZeroDivisionError: Cannot divide by zero");
    }
    return a / b;
}

// 导出这些函数以便其他文件使用
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
