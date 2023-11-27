/*???????? 2: ??????? ??????????? / ??????????(OCP)
????????? ??????? ????????? ????????, ???? ???????? ???????????? ???????? ????? ?????
(?????????, ????, ????????????, ??????????).
?????????? ??????? ??????????? / ?????????? ??? ???????? ?????????? ??? 
????????? ????? ???? ??? ???????? ????????? ????.
???????? ??????? ????????? ????? ?????(?????????, ??????) 
??? ??????????? ???????? ???????????????? ?????????.
*/
interface IShape {
    draw(): void;
}

class Circle implements IShape {
    draw =  function(): void {
        console.log(`Draw circle with radius ${this.radius}`);
    }
    constructor(private radius: number) { }
}

const circle: Circle = new Circle(1);

class Editor {
    addShape(shape: IShape): number {
        return this.shapes.push(shape);
    }

    drawAllShapes(): void {
        this.shapes.forEach(x => x.draw());
    }

    private shapes: IShape[] = [];
}

const editor: Editor = new Editor();
editor.addShape(circle);
editor.drawAllShapes();


class Elips implements IShape {
    draw = function (): void {
        console.log(`Draw elips with radius1: ${this.radius1} and raduis2: ${this.radius2}`);
    }
    constructor(private radius1: number, private radius2: number) { }
}

const elips: Elips = new Elips(2, 3);

editor.addShape(elips);
editor.drawAllShapes();
