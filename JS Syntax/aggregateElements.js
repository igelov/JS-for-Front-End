function aggregateElements(input) {
    let sum1 = 0;
    let sum2 = 0;
    let concat ='';
    for (let i = 0; i <input.length  ; i++) {
        sum1 +=input[i];
        sum2 +=(1/input[i]);
        concat +=input[i];
    }
    console.log(sum1);
    console.log(sum2);
    console.log(concat);
}
aggregateElements([2, 4, 8, 16]);