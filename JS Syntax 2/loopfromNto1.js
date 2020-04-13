function backwardLoop(input) {
    let countdown = Number(input.shift());
    for (let i = countdown; i >0 ; i--) {
        console.log(i);
    }
}
backwardLoop([5])