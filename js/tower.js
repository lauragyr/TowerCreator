var muster = document.getElementById('towerbox');

function towergenerator() {
    var draw = muster.getContext('2d')

    draw.fillRect(0,0,504,504);
    draw.fillStyle = '#000000';


    let buchstabenTEST = [[0,"A"], [63,"B"],[126,"C"], [189,"D"],[252,"E"], [315,"F"], [378,"G"], [441,"H"]];
    let zahlenTEST = [[0,"1"], [63,"2"],[126,"3"], [189,"4"],[252,"5"], [315,"6"], [378,"7"], [441,"8"]];
    let zahlen = [0, 63, 126, 189, 252, 315, 378, 441];
    let buchstaben = [0, 63, 126, 189, 252, 315, 378, 441];

    var randZahlen = zahlen[Math.floor(Math.random() * zahlen.length)];
    console.log("das ist die Zahl: " + randZahlen);

    var randBuchstaben = buchstaben[Math.floor(Math.random() * buchstaben.length)];
    console.log("das ist die Buchstabe: " + randBuchstaben);


/*    var randTest = buchstabenTEST[Math.floor(Math.random() * buchstabenTEST.length)];
    console.log("was ist das?: " + randTest);

    var randTest2 = zahlenTEST[Math.floor(Math.random() * zahlenTEST.length)];
    console.log("was ist diese?: " + randTest2);
*/

    draw.fillRect(randZahlen, randBuchstaben, 63, 63);  
    draw.fillStyle = '#FFFFFF'; 



}