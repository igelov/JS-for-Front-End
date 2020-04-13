function mathOperations(a, b, operator) {
switch (operator) {
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    case '%':
        console.log(a%b);
        break;
    case '**':
        console.log(a**b);
        break;
    default:

}
}
mathOperations(5, 6, '+')