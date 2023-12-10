
import { Cor } from "./cor";
import { Iterator } from "./iterator";
import { Command } from "./command";

console.log('\n\n CoR demo');
const corDemo = new Cor.HandlerDemo();
corDemo.run({ type: Cor.RequestType.TechSupport, message: 'Some tech support stuff...' });
corDemo.run({ type: Cor.RequestType.Return, message: 'Some return stuff...' });
corDemo.run({ type: Cor.RequestType.None, message: 'Some default stuff...' });

console.log('\n\n Iterator demo');
const iteratorDemo = new Iterator.Demo();
iteratorDemo.run();

console.log('\n\n Command demo');
const client = new Command.Client();
client.run();

console.log('\n\n');