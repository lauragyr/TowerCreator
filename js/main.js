function testfunktion() {
 
     console.log("Verknüpfung funktioniert");
     pseudoStart(0);
    var b = document.getElementById('bild');
    b.width = 500;
    b.height = 500;
    
    // mit Knopf
    var knopf = document.createElement("BUTTON");
    knopf.innerHTML = "<b>RRRRANDOM</b>";
    knopf.style.width = "150px";
    knopf.style.height = "60px";
    knopf.style.marginTop = "100px";
    knopf.style.border = "4px solid black";
    knopf.style.backgroundColor = "yellow";
        document.body.appendChild(knopf);
    knopf.addEventListener('click', drawingLoop, false);
function drawingLoop() {
    var draw, w, h
    draw = b.getContext('2d');
    w    = b.width;
    h    = b.height;
    
    draw.clearRect(0, 0, w, h);
    for (var y=0; y<5; y++) {
        for (var x=0; x<5; x++) {
            farbe = pseudoRange(0,255,255);
            //border: 5px solid red;
            draw.fillStyle = 'rgb(' + farbe + ',' + farbe + ',' + farbe + ')';
            draw.fillRect(x * 100, y * 100, 100, 100);
        }
    }
}   






}