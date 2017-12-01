/*

    Zufalls-Funktionen

    n = zufall()				liefert Zahlen zwischen 0.0 und 1.0 [entspricht Math.random()]
    n = zufallRange(von, bis, schritt)		liefert eine Zahl (Int oder Real) zwischen 'von' und 'bis' mit festgelegter Schrittweite 
    n = zufallRangePeak(von, bis, schritt)	wie zufallRange(), aber mit Peak in der Mitte
    n = zufallRangePeakInv(von, bis, schritt)	wie zufallRange(), aber mit Tal in der Mitte
    n = zufallRangePeakAt(von, bis, schritt, zentrum)		wie zufallRangePeak(), aber mit Peak bei 'zentrum'
    n = zufallRangePeakAtInv(von, bis, schritt, zentrum)	wie zufallRangePeakInv(), aber mit Tal bei 'zentrum'

*/

function zufall() {
	// der stinknormale Zufall
	// Zahlen zwischen 0.0 und 1.0
	return Math.random();
}

function zufallRange(von, bis, schritt) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite

	von /= schritt;
	bis /= schritt;
	var z = zufall();

	z = (von + Math.floor(z * (bis - von + 1))) * schritt;
	return parseFloat(z.toFixed(4));
}

function zufallRangePeak(von, bis, schritt) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak in der Mitte

	var x = 2 * zufall() - 1;
	var y = 2 * zufall() - 1;
	var z = ( x * y + 1) / 2;

	von /= schritt;
	bis /= schritt;

	z = (von + Math.floor(z * (bis - von + 1))) * schritt;
	return parseFloat(z.toFixed(4));
}

function zufallRangePeakInv(von, bis, schritt) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak an den Rändern des Bereiches

	var x = 2 * zufall() - 1;
	var y = 2 * zufall() - 1;
	var z = (Math.sign(x) * (1 - Math.abs( x * y)) + 1) / 2;

	von = von / schritt;
	bis = bis / schritt;

	z = (von + Math.floor(z * (bis - von + 1))) * schritt;
	return parseFloat(z.toFixed(4));
}

function zufallRangePeakAt(von, bis, schritt, zentrum) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak bei Zentrum

	var x = 2 * zufall() - 1;
	var y = 2 * zufall() - 1;
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

function zufallRangePeakAtInv(von, bis, schritt, zentrum) {
	// eine Zufallszahl zwischen von und bis
	// mit festgelegter Schrittweite
	// mit Peak an den Rändern des Bereiches

	var x = 2 * zufall() - 1;
	var y = 2 * zufall() - 1;
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
