"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cor_1 = require("./cor");
console.log('\n CoR demo');
const corDemo = new cor_1.Cor.HandlerDemo();
corDemo.run({ type: cor_1.Cor.RequestType.TechSupport, message: 'Some tech support stuff.' });
corDemo.run({ type: cor_1.Cor.RequestType.Return, message: 'Some return stuff.' });
corDemo.run({ type: cor_1.Cor.RequestType.None, message: 'Some default stuff.' });
//# sourceMappingURL=app.js.map