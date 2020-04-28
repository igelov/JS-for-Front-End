function solve() {
    let addButton = document.getElementsByTagName("button")[0];
    let inputTextElement = document.getElementsByTagName("input")[0];

    let orderListElement = document.getElementsByTagName("ol")[0];
    let listItemElements = orderListElement.getElementsByTagName("li");

    addButton.addEventListener("click", function () {
        let inputName = inputTextElement.value;

        if (inputName) {
            let currentName = "";
            currentName += inputName[0].toUpperCase();//Making sure that all letters capital
            for (let i = 1; i < inputName.length; i++) {
                currentName += inputName[i].toLowerCase();//making all letter capital but the first
            }
            console.log(currentName +" this is current2 name");

            let index = currentName.charCodeAt(0) - 65; //This gets the first letter and converst it to it's char number.
            //To get the exact alphabet letter number we must subtract 65. Exp: 'A' = 65 -> 'A'.charCodeAt() = 65;

            if (listItemElements[index].innerText.length === 0) {
                listItemElements[index].innerText += currentName;
            } else {
                listItemElements[index].innerText += ", " + currentName;
            }

            inputTextElement.value = null;
        }
    })
}