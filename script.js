const li = document.createElement("li");
const div = document.createElement("div");
const i = document.createElement("i");
const item = document.createElement("item");

let input = document.querySelector('input');
let text = document.querySelector('text');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let container = document.querySelector('container');

li.classList.add('listElement');
div.classList.add('item__btns');
i.classList.add('fa-regular');
i.classList.add('fa-solid');
i.classList.add('fa-trash-can');
i.classList.add('fa-square-check');

addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    list.append(input.value);
})

i.append('item__btns');
item.classList.toggle('done');

list.addEventListener('click', function (event) {
    list.removeChild(item__btns);
})