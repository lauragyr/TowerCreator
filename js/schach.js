
var muster = document.getElementById('schach');

function formengenerator()  {
    var draw = muster.getContext('2d')
    let array = [];

    for (let i = 0; i < 5; i++) {
        array[i] = [];
    }

    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            array[x][y] = Math.round(Math.random());
        }
    }

    console.log(array);
    console.log("und, funktionierts laura?");





   

    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            if (array[x][y] == 1) {
                draw.fillStyle = '#000000';
            } else {
                draw.fillStyle = '#FFFFFF';
            }

            draw.fillRect(x * 100, y * 100, 100, 100);
           
        }
    }



}