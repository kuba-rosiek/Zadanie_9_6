// scripts.js
var list = document.getElementById('list'); //zapamiętuje w zmiennej list odniesienie do id list
var add = document.getElementById('addElem'); //nadaje listener na przycisk
	add.addEventListener('click', function() 
	{ //funkcja reaguje na klik 
		var element = document.createElement('li'); // tworzy kolejne pozycje menu
			element.innerHTML = 'item'+ document.getElementsByTagName('li').length;; // przypisujemy tekst z numerem 
			list.appendChild(element); // dodaje item z numerem
			
	});
