let LivingCreature = require("./LivingCreature")


module.exports = class Grass extends LivingCreature {


    mul() {
        this.energy++;  
        if (newCell && this.energy <= 8) {
            let emptyCells = this.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

            var x = newCell[0];
            var y = newCell[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            this.energy = 0;
        }

    }
}