let LivingCreature = require("./LivingCreature")

module.exports = class Ete extends LivingCreature{
   
   
    mul() {

        this.energy++;
        let found = this.chooseCell(0)
        let newCell = found[Math.floor(Math.random() * found.length)]

        if (newCell && this.energy >= 1) {


            var x = newCell[0];
            var y = newCell[1];

            let grass = new Ete(x, y);
            matrix[y][x] = 3;
            EteArr.push(grass);

            this.energy = 0;
        }

    }
    eat() {
        let found = this.chooseCell(1);
        let newCell = random(found);

        if (newCell) {
            this.energy += 3;
            let x = newCell[0];
            let y = newCell[1];



            for (let i = 0; i < EteArr.length; i++) {
                if (EteArr[i].x == x && EteArr[i].y == y) {
                    EteArr.splice(i, 1);
                    break;
                }
            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0;

            this.x = x
            this.y = y
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

            matrix[y][x] = 3
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
        for (let i = 0; i < EteArr.length; i++) {
            if (this.x == EteArr[i].x && this.y == EteArr[i].y) {
                EteArr.splice(i, 1)

            }
        }
        matrix[this.y][this.x] = 0;
    }
}