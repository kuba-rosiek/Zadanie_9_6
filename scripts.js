// scripts.js
var list = document.getElementById('list'); //zapamiętuje w zmiennej list odniesienie do id list
var add = document.getElementById('addElem'); //nadaje listener na przycisk
	add.addEventListener('click', function() { //funkcja reaguje na klik 
		var element = document.createElement('li'); // tworzy kolejne pozycje menu
		element.innerHTML = 'item'; // przypisujemy tekst item do nowej liisty
		document.getElementsByTagName.length('element'); // pokazuje aktualna ilosc listy
		list.appendChild(element); // dodaje numer do textu 'li'
		console.log(list.appendChild);
	}); 
