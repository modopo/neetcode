// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const { log } = require("console");

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    let operators = new Set();

    operators.add("+");
    operators.add("-");
    operators.add("*");
    operators.add("/");

    for (let char of tokens) {
        if (!operators.has(char)) {
            stack.push(Number(char));
        } else {
            let n2 = Number(stack.pop());
            let n1 = Number(stack.pop());
            console.log(n2, n1);
            stack.push(perform(char, n1, n2));
        }
        console.log(stack);
    }

    return stack[0];
};

function perform(operator, n1, n2) {
    let result = 0;

    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = parseInt(n1 / n2);
            break;
    }

    return result;
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));