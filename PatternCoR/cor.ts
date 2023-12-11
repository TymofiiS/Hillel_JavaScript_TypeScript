/*
Завдання: CoR
Представте, що ви розробляєте систему обробки звернень для компанії з великим обсягом клієнтів. 
Запити можуть стосуватися різних питань, таких як технічна підтримка, платіжні питання, 
запити на повернення товарів тощо. Кожен тип запиту потребує власної обробки.
*/

export module Cor {

    export enum RequestType {
        TechSupport,
        Payment,
        Return,
        None
    }

    interface IRequst {
        type: RequestType;
        message: string;
    }

    interface IHandler {
        setNext(handler: IHandler): void;
        handleRequest(request: IRequst): void;
    }

    abstract class Handler implements IHandler {
        abstract handleRequest(request: IRequst): void;

        protected nextHandler: IHandler | null = null;
        setNext(handler: IHandler): void {
            this.nextHandler = handler;
        }
    }

    class TechSupportHandler extends Handler {
        handleRequest(request: IRequst): void {
            if (request.type === RequestType.TechSupport) {
                console.log(`${RequestType[ request.type]} handled request: ${ request.message }.`);
            } else {
                this.nextHandler?.handleRequest(request);
            }
        }
    }

    class PaymentHandler extends Handler {
        handleRequest(request: IRequst): void {
            if (request.type === RequestType.Payment) {
                console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
            } else {
                this.nextHandler?.handleRequest(request);
            }
        }
    }

    class ReturnHandler extends Handler {
        handleRequest(request: IRequst): void {
            if (request.type === RequestType.Return) {
                console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
            } else {
                this.nextHandler?.handleRequest(request);
            }
        }
    }

    class DefaultHandler extends Handler {
        handleRequest(request: IRequst): void {
            console.log(`${RequestType[request.type]} handled request: ${request.message}.`);
        }
    }

    export class HandlerDemo {
        private _techSupport: TechSupportHandler = new TechSupportHandler();
        private _payment: PaymentHandler = new PaymentHandler();
        private _return: ReturnHandler = new ReturnHandler();

        constructor() {
            this._techSupport.setNext(this._payment);
            this._payment.setNext(this._return);
            this._return.setNext(new DefaultHandler());
        }

        run(request: any) {
            this._techSupport.handleRequest(request as IRequst);
        }
    }
}