/*
    ???????? 5: ??????? ???????? ???????????(DIP)
????????? ??????? ?????? ??????????????, 
?? ????????????? ?????? ???????????? ???????????? ?????????????? ???????.
?????????? ??????? ???????? ??????????? ?? ????????? ???????? ??????????? ??? ??????????, 
??? ????????????? ?????? ???????? ??? ??????????, ? ?? ??? ?????????? ??????????.
    ???????????????, ?? ????? ?????????? ?????? ?????????????? ?? ??????? ?? ????????????? ??????.
*/

interface IMessage { getMessage(): string }

class LowLevelModule {
    constructor(private message: IMessage) {
        console.log( message.getMessage());
    }
}

class HighLevelModule {
    constructor(message: IMessage) {
        new LowLevelModule(message);
    }
}

const message1: IMessage = {
    getMessage: function (): string {
        return "Message 1 was sent";
    }
}

const message2: IMessage = {
    getMessage: function (): string {
        return "Message 2 was sent";
    }
}

let hl = new HighLevelModule(message1);
hl = new HighLevelModule(message2); 