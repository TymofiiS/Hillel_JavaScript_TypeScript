/*
Bridge
??????????? ?????????? ??? ??????????? ?????? ????? ???????? ??????, 
????? ?? MP3 ?? WAV, ? ??????????????? ????? ?????????? ??? ?? ???????????.
*/

interface IMedia {
    provideData(): string;
}

class Mp3 implements IMedia {
    provideData(): string {
        return `MP3 data`;
    }
}

class Wav implements IMedia {
    provideData(): string {
        return `WAV data`;
    }
}

interface IPlayer {
    play(): void;
}

abstract class AbstractPlayer implements IPlayer {

    protected _media: IMedia;
    constructor(media: IMedia) {
        this._media = media;
    }

    abstract play(): void 
}

class Player1 extends AbstractPlayer {
    play(): void {
        console.log(`Player1 is playing ${this._media.provideData()}`);
    }
}

class Player2 extends AbstractPlayer {
    play(): void {
        console.log(`Player2 is playing ${this._media.provideData()}`);
    }
}

const mp3: IMedia = new Mp3();
const waw: IMedia = new Wav();

let player1: IPlayer = new Player1(mp3);
player1.play();
player1 = new Player1(waw);
player1.play();

let player2: IPlayer = new Player2(mp3);
player2.play();
player2 = new Player2(waw);
player2.play();