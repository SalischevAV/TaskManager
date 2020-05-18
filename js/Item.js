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

    comlete(){
        this._isComplete = true;
    }

    unComlete(){
        this._isComplete = false;
    }

    toString(){
        return 'Item text: ${this._text}, is coplete: ${this._isComplete}';
    }


}