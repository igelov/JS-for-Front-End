function createArticle() {
    let newElement = document.getElementById('createTitle');
    let list = document.getElementById('createContent');
    if ((newElement.value.trim().length === 0 || list.value.trim().length === 0)) return;
    let article = document.createElement('article');
    let title = document.createElement('h3');
    title.textContent = newElement.value;
    let context = document.createElement('p');
    context.textContent = list.value;
    article.appendChild(title);
    article.appendChild(context);
    let print = document.getElementById('articles');
    print.appendChild(article);
    newElement.value = "";
    list.value = "";
}