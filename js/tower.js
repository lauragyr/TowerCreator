var muster = document.getElementById('towerbox');

function towergenerator()  {
    var draw = muster.getContext('2d')
    let array = [];

    for (let i = 0; i < 8; i++) {
        array[i] = [];
    }

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            array[x][y] = Math.round(Math.random());
        }
    }

    console.log(array);
    console.log("und, funktionierts laura?");





   

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (array[x][y] == 1) {
                draw.fillStyle = '#000000';
            } else {
                draw.fillStyle = '#FFFFFF';
            }

            draw.fillRect(x * 62.5, y * 62.5, 62.5, 62.5);   
        }
    }

}