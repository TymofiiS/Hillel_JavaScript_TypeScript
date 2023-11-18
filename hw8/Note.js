"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const Status_1 = require("./Status");
const NoteType_1 = require("./NoteType");
class Note {
    Name(name) {
        //get
        if (!name)
            return this._name;
        //set
        this._name = name;
        this._editAt = Date.now();
    }
    Description(description) {
        //get
        if (!description)
            return this._description;
        //set
        this._description = description;
        this._editAt = Date.now();
    }
    Status(status) {
        //get
        if (!status)
            return this._status;
        //set
        this._status = status;
        this._editAt = Date.now();
    }
    EditAt() {
        //get
        return this._editAt;
    }
    NoteType() {
        //get
        return this._noteType;
    }
    CreateAt() {
        //get
        return this._createdAt;
    }
    constructor(_name, _description, _status = Status_1.Status.Active, _noteType = NoteType_1.NoteType.Default) {
        this._name = _name;
        this._description = _description;
        this._status = _status;
        this._noteType = _noteType;
        this._createdAt = Date.now();
        this._editAt = Date.now();
    }
}
exports.Note = Note;
