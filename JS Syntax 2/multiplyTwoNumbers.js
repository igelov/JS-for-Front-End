function multiplyTwoNumbers(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let sum = a * b;
    console.log(sum);
}

multiplyTwoNumbers([2, 3]);