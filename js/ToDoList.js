"use strict"

class ToDoList {
    constructor() {
        this._items = [];
    }

    get items() {
        return this._items;
    }

    getItemByText(searchText) {
        return this._items.find((item) => item.text == searchText);
    }

    addItem(item) {
        this._items.push(item);
    }

    removeItemByText(searchText) {  //this._items = this._items.filter((item) => item.text != searchText);// remove all item with searchText
        this._items.find(
            (item, index) => {
                if (item.text == searchText) {
                    this._items.splice(index, 1);
                    return true; 
                }
            }
        );
    }

    clear() {
        this._items = [];
    }

}