// 'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = "todos";

let toDos = []; //  parsedToDos으로 로컬 스토리지에 새로운 list 저장 하고, 새로운 list를 추가해줄 때 기존의 list를 덮어쓰는 걸 방지하기 위해 let으로 변수 선언해주고, parsedToDos값을 넣어준 후, forEach 메소드를 돌린다.

// 로컬 스토리지는 string만 저장할 수 있다.

function saveToDos() { // toDos array를 로컬 스토리지에 저장하는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
};

function deleteToDo(event) {
    const li = event.target.parentElement; // button의 부모인 li를 찾아서 삭제
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id; 
    // list에 filter 메소드를 통해 삭제하고자 하는 아이템을 구분하기 위해 newTodoObj의 id를 부여한다.
    const span = document.createElement('span');
    span.innerText = newTodoObj.text; 
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
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // newTodoObj 라는 오브젝트를 parsedToDos 배열에 넣어준다.
    paintToDo(newTodoObj); 
    saveToDos();
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
// forEach는 배열에 있는 각각의 아이템이 함수를 실행하도록 해주는 메서드 이다.

// JSON.stringify는 object나 array를 string으로 변환 해준다.
// JSON.parse는 string을 object나 array로 변환 해준다. 