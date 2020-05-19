"use strict"

class Item {
    constructor(text) {
        this._text = text;
        this._isComplete = false
    }

    get text() {
        return this._text;
    }

    get isComplete(){
        return this._isComplete;
    }

    complete(){
        this._isComplete = true;
    }

    unComplete(){
        this._isComplete = false;
    }

    toString(){
        return 'Item text: ${this._text}, is coplete: ${this._isComplete}';
    }


}