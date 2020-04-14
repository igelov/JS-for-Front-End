function addItem() {
    let newListItemText = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = newListItemText.value;
    document.getElementById('items').appendChild(li);
    newListItemText.value = "";
}