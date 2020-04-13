function wrongResult(input) {
    let result = '';
let negative = 0
    for (let i = 0; i < input.length ; i++) {
        if(input[i]<0){
            negative++;
        }
    }
    if (!(negative%2)){
        result = 'Positive';
    }
    else{result = 'Negative'
    }
    console.log(result);
}
wrongResult([2,3,-4]);