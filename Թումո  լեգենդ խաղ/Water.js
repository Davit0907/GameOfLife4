let LivingCreature = require("./LivingCreature")

module.exports = class Water extends LivingCreature{
  
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

    
    
    mul() {


        let found = this.chooseCell(0)
        let newCell = found[Math.floor(Math.random() * found.length)]

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            let eater = new Water(x, y);
            matrix[y][x] = 4;
            waterArr.push(eater);


        }

    }

    eat() {
        let found = this.chooseCell(1);
        let newCell = random(found);

        if (newCell) {
            this.energy += 2;
            let x = newCell[0];
            let y = newCell[1];



            for (let i = 0; i < waterArr.length; i++) {
                if (waterArr[i].x == x && waterArr[i].y == y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 1;

            this.x = x
            this.y = y
            this.energy--
            if (this.energy > 20) {
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

            matrix[y][x] = 4
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
        for (let i = 0; i < waterArr.length; i++) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {


            }
        }
        matrix[this.y][this.x] = 0;
    }
}