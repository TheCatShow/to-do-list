
let input = document.querySelector('input');
let text = document.querySelector('text');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let container = document.querySelector('container');
let item = document.createElement('item');

addBtn.addEventListener('click', function (event) {
    let li = document.createElement('li');
    li.classList.add('item');
    event.preventDefault();
    list.append(input.value);
    
    let div = document.createElement('div');
    div.append(item);
    div.classList.add('item__btns');

    let i = document.createElement('i');
    i.classList.add('fa-regular fa-square-check');
    i.append(item__btns);
    item.classList.toggle(done);

    let l = document.createElement('l');
    l.classList.add('fa-solid fa-trash-can');
    l.append(item__btns);
    ul.removeChild(li);
})