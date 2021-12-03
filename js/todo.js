'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

function deleteToDo(event) {
    const li = event.target.parentElement; // button의 부모인 li를 찾아서 삭제
    li.remove();
};

function paintToDo(newToDo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
};

toDoForm.addEventListener('submit', handleToDoSubmit);