"use strict";
/*
Завдання: CoR
Представте, що ви розробляєте систему обробки звернень для компанії з великим обсягом клієнтів.
Запити можуть стосуватися різних питань, таких як технічна підтримка, платіжні питання,
запити на повернення товарів тощо. Кожен тип запиту потребує власної обробки.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cor = void 0;
var Cor;
(function (Cor) {
    let RequestType;
    (function (RequestType) {
        RequestType[RequestType["TechSupport"] = 0] = "TechSupport";
        RequestType[RequestType["Payment"] = 1] = "Payment";
        RequestType[RequestType["Return"] = 2] = "Return";
        RequestType[RequestType["None"] = 3] = "None";
    })(RequestType = Cor.RequestType || (Cor.RequestType = {}));
    class Handler {
        constructor() {
            this.nextHandler = null;
        }
        setNext(handler) {
            this.nextHandler = handler;
        }
    }
    class TechSupportHandler extends Handler {
        handleRequest(request) {
            var _a;
            if (request.type === RequestType.TechSupport) {
                console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
            }
            else {
                (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handleRequest(request);
            }
        }
    }
    class PaymentHandler extends Handler {
        handleRequest(request) {
            var _a;
            if (request.type === RequestType.Payment) {
                console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
            }
            else {
                (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handleRequest(request);
            }
        }
    }
    class ReturnHandler extends Handler {
        handleRequest(request) {
            var _a;
            if (request.type === RequestType.Return) {
                console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
            }
            else {
                (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.handleRequest(request);
            }
        }
    }
    class DefaultHandler extends Handler {
        handleRequest(request) {
            console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
        }
    }
    class HandlerDemo {
        constructor() {
            this._techSupport = new TechSupportHandler();
            this._payment = new PaymentHandler();
            this._return = new ReturnHandler();
            this._techSupport.setNext(this._payment);
            this._payment.setNext(this._return);
            this._return.setNext(new DefaultHandler());
        }
        run(request) {
            this._techSupport.handleRequest(request);
        }
    }
    Cor.HandlerDemo = HandlerDemo;
})(Cor || (exports.Cor = Cor = {}));
//# sourceMappingURL=cor.js.map