function solve(input) {
    let n = Number(input.shift());
    let result = [];
    //"0-5
    for (let i = 0; i < input.length; i++) {
        const elements = input[i].split(" - ");
        const index = elements[0];
        const value = elements[1];
        result[index] = value;
    }
    for (let i = 0; i < n; i++) {
        if (!result[i]) {
            result[i] = 0;
        }
    }
    result.forEach(e => {
        console.log(e);
    });
}

solve([3, "0 - 5", "1 - 6", "2 - 7"]);
