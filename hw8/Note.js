"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const Status_1 = require("./Status");
const NoteType_1 = require("./NoteType");
class Note {
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
        this._editAt = Date.now();
    }
    setDescription(description) {
        this._description = description;
        this._editAt = Date.now();
    }
    getDescription() {
        return this._description;
    }
    setStatus(status) {
        this._status = status;
        this._editAt = Date.now();
    }
    getStatus() {
        return this._status;
    }
    getId() {
        return this._id;
    }
    getEditAt() {
        return this._editAt;
    }
    getNoteType() {
        return this._noteType;
    }
    getCreateAt() {
        return this._createdAt;
    }
    constructor(_name, _description, _status = Status_1.Status.Active, _noteType = NoteType_1.NoteType.Default) {
        this._name = _name;
        this._description = _description;
        this._status = _status;
        this._noteType = _noteType;
        this._createdAt = Date.now();
        this._editAt = Date.now();
        this._id = Note.currentId++;
    }
    setReadOnly(createdDate, editDate, id) {
        this._createdAt = createdDate;
        this._editAt = editDate;
        this._id = id;
    }
    clone() {
        let result = new Note(this._name, this._description, this._status, this._noteType);
        result.setReadOnly(this._createdAt, this._editAt, this._id);
        return result;
    }
}
exports.Note = Note;
Note.currentId = 1;
