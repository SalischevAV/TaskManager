"use strict"

class ToDoView{
    constructor(model, mountPoint){
        this._model = model;
        this._mountPoint = mountPoint; 
        this._addItemInput = null;
        this._toDoList = null;
    }

    _addItemBtnClickHandler(){
        return () =>{
        const itemText = this._addItemInput.value;   
        this._model.addItem(new Item(itemText));
        const item = document.createElement("li");        
        item.innerText = itemText;
        this._toDoList.appendChild(item);
        }
    }

    _clearBtnClickHandler(){
        return () => {
            this._model.clear();
            this._toDoList.innerText = "";
        }
    }

    _itemClickHandler(){
        return (evt) =>{
            if(evt.target.tagName == "LI"){
            evt.target.classList.toggle("text-green");
            evt.target.classList.toggle("complete");
            evt.target.classList.toggle("text-italic");
            }
        }
    }



    render(){
        //<input type="text" placeholder="Item text" />
        this._addItemInput = document.createElement("input");
        this._addItemInput.type = "text";
        this._addItemInput.placeholder = "Item text";
        this._mountPoint.appendChild(this._addItemInput);

        //<button type="button" class="text-green">+</button>
        const addItemBtn = document.createElement("button");
        addItemBtn.type = "button";
        addItemBtn.className = "text-green";
        addItemBtn.innerText = "+";
        addItemBtn.addEventListener("click", this._addItemBtnClickHandler());
        this._mountPoint.appendChild(addItemBtn);

        //<ul class="list-type-none"></ul>
        this._toDoList = document.createElement("ul");
        this._toDoList.className="list-type-none";
        this._toDoList.addEventListener("click", this._itemClickHandler());
        this._mountPoint.appendChild(this._toDoList);

 
        //<button type="button" class="text-red">C</button>
        const clearBtn = document.createElement("button");
        clearBtn.type = "button";
        clearBtn.className = "text-red";
        clearBtn.innerText = "C";
        clearBtn.addEventListener("click", this._clearBtnClickHandler());
        this._mountPoint.appendChild(clearBtn);

    }
}