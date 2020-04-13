function stringLength(string1, string2, string3) {
    let stringLength = string1.length +string2.length +string3.length;
    let averageLength = Math.floor((stringLength /3));
    console.log(stringLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake')