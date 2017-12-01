/*

    Zufalls-Funktionen mit eigenem Generator
	
    n = pseudoStart(seed)			startet den Generator
						mit seed = 0 (zufällig, benutzt z.B. Millisekunden seit Systemstart)
						oder mit seed = 1 - 2147483647 (gleichbleibende Serie)

    n = pseudo()				liefert Zahlen zwischen 0.0 und 1.0 [entspricht Math.random()]
    n = pseudoRange(von, bis, schritt)		liefert eine Zahl (Int oder Real) zwischen 'von' und 'bis' mit festgelegter Schrittweite 
    n = pseudoRangePeak(von, bis, schritt)	wie pseudoRange(), aber mit Peak in der Mitte
    n = pseudoRangePeakInv(von, bis, schritt)	wie pseudoRange(), aber mit Tal in der Mitte
    n = pseudoRangePeakAt(von, bis, schritt, zentrum)		wie pseudoRangePeak(), aber mit Peak bei 'zentrum'
    n = pseudoRangePeakAtInv(von, bis, schritt, zentrum)	wie pseudoRangePeakInv(), aber mit Tal bei 'zentrum'

    a = pseudoRGB()				eine RGB-Farbe als String
    a = pseudoAuswahl(liste)			liefert ein zufälliges Element des Arrays 'liste'	
        pseudoListeMischen(liste)		mischt die Elemente des Arrays 'liste'

*/


function pseudoStart(seed) {
	// initialisierung mit seed = 0 (zufällig)
	// oder mit seed = 1 - 2147483647 (gleichbleibende Serie)

	seed = Math.floor(seed);
	if (seed < 1) {
		pseudoCore = Math.floor(Math.random() * 2147483647) ;
	} else {
		pseudoCore = seed;
	}
	return pseudoCore;
}

function pseudo() {
	// der stinknormale Pseudo-Zufall
	// Zahlen zwischen 0.0 und 1.0
	var newCore = (16807 * (pseudoCore % 127773)) - (2836 * (Math.floor(pseudoCore / 127773))) ;
	if (newCore > 0) {
		pseudoCore = newCore;
	} else {
		pseudoCore = newCore + 2147483647;
	}
	return pseudoCore / 2147483647;
}

function pseudoAuswahl(liste) {
	var n = pseudoRange(0, liste.length - 1, 1);
	return liste[n].trim();	
}

function pseudoRange(von, bis, schritt) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite

	von /= schritt;
	bis /= schritt;
	var z = pseudo();

	z = (von + Math.floor(z * (bis - von + 1))) * schritt;
	return parseFloat(z.toFixed(4));
}

function pseudoRangePeak(von, bis, schritt) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak in der Mitte

	var x = 2 * pseudo() - 1;
	var y = 2 * pseudo() - 1;
	var z = ( x * y + 1) / 2;

	von /= schritt;
	bis /= schritt;

	z = (von + Math.floor(z * (bis - von + 1))) * schritt;
	return parseFloat(z.toFixed(4));
}

function pseudoRangePeakInv(von, bis, schritt) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak an den Rändern des Bereiches

	var x = 2 * pseudo() - 1;
	var y = 2 * pseudo() - 1;
	var z = (Math.sign(x) * (1 - Math.abs( x * y)) + 1) / 2;

	von = von / schritt;
	bis = bis / schritt;

	z = (von + Math.floor(z * (bis - von + 1))) * schritt;
	return parseFloat(z.toFixed(4));
}

function pseudoRangePeakAt(von, bis, schritt, zentrum) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak bei Zentrum

	var x = 2 * pseudo() - 1;
	var y = 2 * pseudo() - 1;
	var z = ( x * y + 1) / 2;

	if (z < 0.5) {
		von = von / schritt;
		bis = zentrum / schritt;
 
		z = (von + Math.floor((2 * z) * (bis - von + 1))) * schritt;
		return parseFloat(z.toFixed(4));
	} else if ( z > 0.5) {
		von = zentrum / schritt;
		bis = bis / schritt;
		z = (von + Math.floor((2 * (z - 0.5)) * (bis - von + 1))) * schritt;
		return parseFloat(z.toFixed(4));

	} else {
		return parseFloat(zentrum.toFixed(4));
	}
}

function pseudoRangePeakAtInv(von, bis, schritt, zentrum) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak an den Rändern des Bereiches

	var x = 2 * pseudo() - 1;
	var y = 2 * pseudo() - 1;
	var z = (Math.sign(x) * (1 - Math.abs(x * y)) + 1) / 2;

	if (z < 0.5) {
		von = von / schritt;
		bis = zentrum / schritt;
 
		z = (von + Math.floor((2 * z) * (bis - von + 1))) * schritt;
		return parseFloat(z.toFixed(4));
	} else if ( z > 0.5) {
		von = zentrum / schritt;
		bis = bis / schritt;
		z = (von + Math.floor((2 * (z - 0.5)) * (bis - von + 1))) * schritt;
		return parseFloat(z.toFixed(4));

	} else {
		return parseFloat(zentrum.toFixed(4));
	}
}
	
function pseudoRGB() {
	// eine RGB-Farbe als string

	var r, g, b;
	r = pseudoRange(0,255,1); 
	g = pseudoRange(0,255,1); 
	b = pseudoRange(0,255,1); 
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function pseudoAuswahl(liste) {
	// liefert ein zufälliges Element des Arrays 'liste'

	var n = pseudoRange(0, liste.length - 1, 1);
	return liste[n].trim();	
}

function pseudoListeMischen(liste) {
	// mischt die Elemente des Arrays 'liste'

	var n, i, x, y, t;
	n = 3 * liste.length;

	for (i = 0; i < n; i++) {
		do {
			x = pseudoRange(0, liste.length - 1, 1);
			y = pseudoRange(0, liste.length - 1, 1);
		} while (x == y) ;

		// vertauschen
		t = liste[x]; liste[x] = liste[y]; liste[y] = t;
	} ;
}		
	