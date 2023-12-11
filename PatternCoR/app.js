"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cor_1 = require("./cor");
const iterator_1 = require("./iterator");
const command_1 = require("./command");
console.log('\n\n CoR demo');
const corDemo = new cor_1.Cor.HandlerDemo();
corDemo.run({ type: cor_1.Cor.RequestType.TechSupport, message: 'Some tech support stuff...' });
corDemo.run({ type: cor_1.Cor.RequestType.Return, message: 'Some return stuff...' });
corDemo.run({ type: cor_1.Cor.RequestType.None, message: 'Some default stuff...' });
console.log('\n\n Iterator demo');
const iteratorDemo = new iterator_1.Iterator.Demo();
iteratorDemo.run();
console.log('\n\n Command demo');
const client = new command_1.Command.Client();
client.run();
console.log('\n\n');
//# sourceMappingURL=app.js.map