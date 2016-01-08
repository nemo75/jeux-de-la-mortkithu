'use strict'
$(document).ready(function(){
	var ligne = prompt("Combien de ligne veux tu? si tu met 0 je te pirate");
	while (ligne == 0){
		var ligne = prompt("HACKED.EXE - tu est sur de vouloir remettre 0 ?");
		while (ligne == 0) {
			var ligne = prompt("Une fois je veux bien deux fois cest de la curiosite mais trois fois tes ***");
		}
	}
	var colonne = prompt("Et maintenant combien de colonne veux tu? Si tu met 0 je te (re)pirate");
	while (colonne == 0){
		var colonne = prompt("CAS DESEPERER");
		while( colonne == 0) { 
			var colonne = prompt("C'est l'histoir un mec qui s'endors quand il ecrit, il veux la raconter mais ZzzZzzZZZzzZZZ")
		}
	}
	$('.container').append('<table></table>');

	for (var j = 0; j < ligne; j++) {
		var addtr= $('table').append('<tr classe="a"></tr>');
		/*var addtrico= $('table').append('<tr classe="a"><i class="fa fa-bug fa-3x"></i></tr>');
		if (j % 2 ==0){
			addtrico;
		}*/
		addtr;
	}
	for (var i = 0; i < colonne; i++) {
		var addtdico = $('tr').append('<td class="cellule"><i class="fa fa-bug fa-3x"></i></td>');
		var addtd = $('tr').append('<td class="cellule"></td>');
		if(i % 2 == 0){
			addtdico;
		}
		addtd;
	}
});






