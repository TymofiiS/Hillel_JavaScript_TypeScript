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

import { text } from "node:stream/consumers";

export module Command {

    class TextEditor {
        constructor(private _text: string) { }
        getText(): string { return this._text }
        setText(text: string): void {this._text = text }
    }

    interface ICommand {
        execute(): void;
        getName(): string;
    }

    class InsertCommand implements ICommand {
        constructor(private _textEditor: TextEditor, private _text:string) { }
        execute(): void {
            this._textEditor.setText(this._textEditor.getText() + this._text);
        }
        getName(): string { return 'Insert command' }
    }

    class DeleteCommand implements ICommand {
        constructor(private _textEditor: TextEditor, private _text: string) { }
        execute(): void {
            this._textEditor.setText(this._textEditor.getText().replace(this._text, ''));
        }
        getName(): string { return 'Delete command' }
    }

    class Invoker {
        private _stack: ICommand[] = [];
        operate(command: ICommand) {
            command?.execute();
            this._stack.push(command);
        }
        allStack(): string {
            let res: string = '';
            this._stack.forEach(c => res += '\n\t'+c.getName());
            return res;
        }
    }

    export class Client {
        run() {
            const textEditor: TextEditor = new TextEditor('first');
            const invoker: Invoker = new Invoker();
            const insert: InsertCommand = new InsertCommand(textEditor, 'second');
            const del: DeleteCommand = new DeleteCommand(textEditor, 'second');

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
}

