/*function grundriss() {

console.log("hallo wixxer");
	

	let array = [];

for (let i = 0; i < 5; i++)
{
	array[i] = [];
}

for (let y = 0; y < 5; y++)
{
	for (let x = 0; x < 5; x++)
	{
		array[x][y] = Math.round(Math.random());
	}
}


for (let y = 0; y < 5; y++)
{
	for (let x = 0; x < 5; x++)
	{
		if (array[x][y] == 1)
		{
			// draw black
			// zeichne x * px bis (x + 1) * px
			// zeichne y * px bis (y + 1) * px
			// setze Frabe schwarz
		}
		else
		{
			// draw white
			// setze Frabe weiss
		}

		rect(x*width, y*height, width, height);
	}
}



}
*/
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
    console.log(und, funktionierts laura..)




   

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

/*

function drawingLoop() {
    var draw, w, h
    draw = getContext('2d');
    w    = 500px;
    h    = 500px;
    
    draw.clearRect(0, 0, w, h);


    for (let y = 0; y < 5; y++) {
        for (let x = 0; x<5; x++) {
            farbe = pseudoRange(0,255,255);
            //border: 5px solid red;
            draw.fillStyle = 'rgb(' + farbe + ',' + farbe + ',' + farbe + ')';
            draw.fillRect(x * 100, y * 100, 100, 100);
        }
    }
} 

*/