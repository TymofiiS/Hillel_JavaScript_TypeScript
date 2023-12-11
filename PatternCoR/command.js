"use strict";
/*
Завдання: Command
Створіть простий текстовий редактор,
використовуючи паттерн Command для реалізації відміни та відновлення операцій.

Створіть клас TextEditor (Текстовий редактор):
Клас повинен мати текстове поле для зберігання введеного тексту.
Реалізуйте метод для виведення поточного тексту.


Створіть інтерфейс Command та класи конкретних команд:
Інтерфейс повинен визначати метод execute().

Створіть класи InsertCommand та DeleteCommand,
які реалізують інтерфейс та виконують вставку та видалення тексту відповідно.

Створіть клас Invoker (Замовник):
Клас повинен мати стек команд для зберігання виконаних операцій.
Реалізуйте методи для виклику команд та додавання їх до стеку.


Створіть клас Client (Клієнт):
Створіть об'єкт текстового редактору та об'єкт замовника.
Створіть об'єкти конкретних команд та налаштуйте їх для вставки та видалення тексту.
Використовуйте замовника для виклику команд та зберігання їх у стеку.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    class TextEditor {
        constructor(_text) {
            this._text = _text;
        }
        getText() { return this._text; }
        setText(text) { this._text = text; }
    }
    class InsertCommand {
        constructor(_textEditor, _text) {
            this._textEditor = _textEditor;
            this._text = _text;
        }
        execute() {
            this._textEditor.setText(this._textEditor.getText() + this._text);
        }
        getName() { return 'Insert command'; }
    }
    class DeleteCommand {
        constructor(_textEditor, _text) {
            this._textEditor = _textEditor;
            this._text = _text;
        }
        execute() {
            this._textEditor.setText(this._textEditor.getText().replace(this._text, ''));
        }
        getName() { return 'Delete command'; }
    }
    class Invoker {
        constructor() {
            this._stack = [];
        }
        operate(command) {
            command === null || command === void 0 ? void 0 : command.execute();
            this._stack.push(command);
        }
        allStack() {
            let res = '';
            this._stack.forEach(c => res += '\n\t' + c.getName());
            return res;
        }
    }
    class Client {
        run() {
            const textEditor = new TextEditor('first');
            const invoker = new Invoker();
            const insert = new InsertCommand(textEditor, 'second');
            const del = new DeleteCommand(textEditor, 'second');
            console.log(`Initial: ${textEditor.getText()}`);
            invoker.operate(insert);
            console.log(`After Insert: ${textEditor.getText()}`);
            invoker.operate(insert);
            console.log(`After Insert: ${textEditor.getText()}`);
            invoker.operate(del);
            console.log(`After Delete: ${textEditor.getText()}`);
            console.log(`All stack: ${invoker.allStack()}`);
        }
    }
    Command.Client = Client;
})(Command || (exports.Command = Command = {}));
//# sourceMappingURL=command.js.map