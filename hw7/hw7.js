"use strict";
/*
створити декоратор Memoize для методу класу,
який буде на основі отриманих аргументів метода повертати закешоване значення
*/
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashCode = void 0;
function hashCode(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) {
        h = 31 * h + str.charCodeAt(i);
    }
    return h & 0xffffffff;
}
exports.hashCode = hashCode;
function Memoize(originalMethod, context) {
    if (context.kind != "method")
        throw new Error("Method only");
    function replacementFunction(...args) {
        // Method name
        const methodName = String(context.name);
        // The decorated method's parameters will be passed in as args.
        let hash = "";
        for (let i = 0; i < args.length; i++) {
            hash += args[i];
        }
        // Emit a message to the console
        console.log(`Memoize says - before calling the method: ${methodName} 
      were calculated its parameters hash: ${hashCode(hash)}`);
        // Execute the behavior originally programmed in
        // the decorated method
        const result = originalMethod.apply(this, args);
        // if the decorated method returned a value when executed,
        // capture that result
        const msg = result != null
            ? `${methodName} and returned: ${JSON.stringify(result)}`
            : `${methodName}`;
        // Having executed the decorated method's behavior, emit
        // a message to the console report what happened
        console.log(`Memoize says - after calling the method: ${msg}`);
        // Return decorated method return value
        return result;
    }
    return replacementFunction;
}
let User = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _About_decorators;
    return _a = class User {
            About(name, age) {
                console.log("Executing method About");
                return `N: ${name}, A: ${age}`;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _About_decorators = [Memoize];
            __esDecorate(_a, null, _About_decorators, { kind: "method", name: "About", static: false, private: false, access: { has: obj => "About" in obj, get: obj => obj.About }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const user = new User();
console.log(user.About("name1", 1));
/*
створити декоратор Debounce для методу класу,
який за отриманим значенням буде відтерміновувати запуск методу
*/
function Debounce(delayMSec = 0) {
    return function (originalMethod, context) {
        if (context.kind != "method")
            throw new Error("Method only");
        function replacementFunction(...args) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(`Method executing paused: ${Date.now()}`);
                yield new Promise((f) => setTimeout(f, delayMSec));
                console.log(`Method executing continue: ${Date.now()}`);
                return originalMethod.apply(this, args);
            });
        }
        return replacementFunction;
    };
}
let User1 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _MethodForDelay_decorators;
    return _a = class User1 {
            MethodForDelay() {
                console.log("Executing method MethodForDelay");
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _MethodForDelay_decorators = [Debounce(5000)];
            __esDecorate(_a, null, _MethodForDelay_decorators, { kind: "method", name: "MethodForDelay", static: false, private: false, access: { has: obj => "MethodForDelay" in obj, get: obj => obj.MethodForDelay }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const user1 = new User1();
console.log(`Before main executing: ${Date.now()}`);
console.log(user1.MethodForDelay());
console.log(`After main executing: ${Date.now()}`);
