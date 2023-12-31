/*
??????, ?? ?? ????????? ??????? ??????????????? ??????, 
???? ???? ???????????? ????? ???? ?????, ???? ?? ????? ?? ?????. 
???? ???????? - ??????????? ????? ??? ??????????????? ??????, 
??? ????????? ????????? ? ??? ??? ????????? ???????????.
*/

interface IMedia {
    play(): void;
    pause(): void;
    moveToEnd(): void;
    moveToStart(): void;
}

interface IAudio extends IMedia { }
interface IVideo extends IMedia { }

class Audio implements IAudio {
    play(): void {
        console.log("I am playing audio...");
    }
    pause(): void {
        console.log("I am pausing audio...");
    }
    moveToEnd(): void {
        console.log("I am moving to the audio end...");
    }
    moveToStart(): void {
        console.log("I am moving to the audio start...");
    }
}

class Video implements IVideo {
    play(): void {
        console.log("I am playing video...");
    }
    pause(): void {
        console.log("I am pausing video...");
    }
    moveToEnd(): void {
        console.log("I am moving to the video end...");
    }
    moveToStart(): void {
        console.log("I am moving to the video start...");
    }
}

class Player {
    private _media?: IMedia

    loadMedia(media: IMedia) { this._media = media; }

    playStop(play: boolean = true): void {
        if (play) { this._media?.play(); }
        else { this._media.pause() }
    }

    scroll(moveForward: boolean = true): void {
        if (moveForward) { this._media?.moveToEnd(); }
        else { this._media.moveToStart(); }
    }
}

const audio = new Audio();
const video = new Video();
const player = new Player();

player.loadMedia(audio);
player.scroll();
player.playStop();

player.loadMedia(video);
player.playStop();
player.playStop(false);