"use strict"

const toDo = new ToDoList();
const mp = document.getElementById("root");
const view = new ToDoView(toDo, mp);
view.render();