function solve() {
    let newElement = document.getElementById("newText").value; // Collect the Input field
    let list = document.getElementById("items"); //Collect the List in the HTML
    if (newElement.length === 0) return; //If the field is empty - do nothing;
    let listItem = document.createElement("li"); //Start building a list item
    listItem.textContent = newElement; //Else of the If, get the value of the input field.
    let remove = document.createElement("a"); //Adding the remove link
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);

    listItem.appendChild(remove);
    list.appendChild(listItem);
    function deleteItem() {
        listItem.remove();
    }
}
