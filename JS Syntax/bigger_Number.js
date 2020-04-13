function biggerNumber(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());

    if(firstNumber>=secondNumber){
        return firstNumber;
    }else{
        return secondNumber;
    }
}
console.log(biggerNumber([10,20]));