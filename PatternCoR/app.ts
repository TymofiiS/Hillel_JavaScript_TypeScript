
import { Cor } from "./cor";

console.log('\n CoR demo');
const corDemo = new Cor.HandlerDemo();
corDemo.run({ type: Cor.RequestType.TechSupport, message: 'Some tech support stuff...' });
corDemo.run({ type: Cor.RequestType.Return, message: 'Some return stuff...' });
corDemo.run({ type: Cor.RequestType.None, message: 'Some default stuff...' });