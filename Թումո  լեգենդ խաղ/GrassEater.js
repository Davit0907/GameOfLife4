let LivingCreature = require("./LivingCreature")


module.exports = class GrassEater extends LivingCreature {
  
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {

        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {


        let found = this.chooseCell(0)
        let newCell = found[Math.floor(Math.random() * found.length)]

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);


        }

    }

    eat() {
        let found = this.chooseCell(1);
        let newCell = random(found);

        if (newCell) {
            this.energy += 3;
            let x = newCell[0];
            let y = newCell[1];



            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0;

            this.x = x
            this.y = y
            this.energy--
            if (this.energy > 80) {
                this.mul();
            }

        } else {
            this.move();
        }
    }
    move() {

        let found = this.chooseCell(0)
        let newCell = random(found);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy--;

            if (this.energy >= 0) {
                this.die();
            }
        }
    }
    die() {
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);

            }
        }
        matrix[this.y][this.x] = 0;
    }
}