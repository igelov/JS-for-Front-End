function multiply_divide(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    if(b>=a){
       console.log(a*b);}
    else {
        console.log(a/b);
    }
}
multiply_divide([3, 2]);