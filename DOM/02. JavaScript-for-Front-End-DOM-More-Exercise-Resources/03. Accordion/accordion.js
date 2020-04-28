function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let pane = document.getElementById('extra');
    if (pane.style.display === "block") {
        pane.style.display = "none";
        button.innerText = 'More';
    } else {
        pane.style.display = "block";
        button.innerText = 'Less';
    }
}