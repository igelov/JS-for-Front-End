function solve() {
    const inputText = document.getElementById('input').innerText;
    const outputElement = document.getElementById('output');

    inputText
        .match(/(?:\s*)([^.!?]+[.!?]+)/g)
        .map(sentence => sentence.trim())
        .reduce((acc, sentence, index) => {
            if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
            return acc;
        }, [])
        .forEach(paragraph => {
            let parHTML = document.createElement('p');
            parHTML.textContent = paragraph;
            outputElement.appendChild(parHTML);
        });
}


/*
function solve() {
    let newText = document.getElementById('input').innerText;
    let sentances = [];
    sentances = newText.match(/[^\.!\?]+[\.!\?]+/g);
    let par = [];
    let cycle = sentances.length;
    for (let i = 0; i < cycle; i++) {
        par[i] = sentances.splice(0, 3).join('');
    }
    par = par.filter(item => item);//Removes the empty spaces
    //Bellow selects the output dif and appends each element of the array in a new <p>
    let paragraph = document.getElementById('output');
    for (let i = 0; i < par.length; i++) {
        let parHTML = document.createElement('p');
        parHTML.textContent = par[i];
        paragraph.appendChild(parHTML);
    }
}*/
