/*
??????, ?? ?? ????????? ??????? ??????????????? ??????,
???? ???? ???????????? ????? ???? ?????, ???? ?? ????? ?? ?????.
???? ???????? - ??????????? ????? ??? ??????????????? ??????,
??? ????????? ????????? ? ??? ??? ????????? ???????????.
*/
class Audio {
    play() {
        console.log("I am playing audio...");
    }
    pause() {
        console.log("I am pausing audio...");
    }
    moveToEnd() {
        console.log("I am moving to the audio end...");
    }
    moveToStart() {
        console.log("I am moving to the audio start...");
    }
}
class Video {
    play() {
        console.log("I am playing video...");
    }
    pause() {
        console.log("I am pausing video...");
    }
    moveToEnd() {
        console.log("I am moving to the video end...");
    }
    moveToStart() {
        console.log("I am moving to the video start...");
    }
}
class Player {
    loadMedia(media) { this._media = media; }
    playStop(play = true) {
        var _a;
        if (play) {
            (_a = this._media) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            this._media.pause();
        }
    }
    scroll(moveForward = true) {
        var _a;
        if (moveForward) {
            (_a = this._media) === null || _a === void 0 ? void 0 : _a.moveToEnd();
        }
        else {
            this._media.moveToStart();
        }
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
//# sourceMappingURL=app.js.map