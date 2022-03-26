var socket = io();
let side = 20;

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");
}
function nkarel (matrix){
    console.log(matrix);

for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            fill('green')
        }
        else if (matrix[y][x] == 2) {
            fill('yellow')
        } else if (matrix[y][x] == 3) {
            fill('red')
        }
        else if (matrix[y][x] == 4) {
            fill('blue')
        }
        else {
            fill('brown')
        } 
        rect(x * side, y * side, side, side)
    }
}
io.sockets.emit('send matrix', matrix)
}
socket.on('send matrix', nkarel);
setInterval(
    function(){
        socket.on('send matrix', nkarel)
    },1000  / 6
)