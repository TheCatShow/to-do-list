
let input = document.querySelector('#taskInput');
let text = document.querySelector('text');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');

addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    li.classList.add('item');
    list.append(li);
    li.textContent = input.value;

    let div = document.createElement('div');
    li.append(div);
    div.classList.add('item__btns');

    let i = document.createElement('i');
    console.log(i);
    i.className = 'fa-regular fa-square-check';
    div.append(i);
    i.addEventListener('click', function(){
        li.classList.toggle('done');
    })

    let i2 = document.createElement('i2');
    console.log(i);
    i2.className = 'fa-solid fa-trash-can';
    div.append(i2);
    i2.addEventListener('click', function(){
        li.remove();
    })

    //  let l = document.createElement('l');
    //  l.className = 'fa-solid fa-trash-can';
    //  l.append(div);
    //  li.remove();
})