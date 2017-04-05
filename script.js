function changeNameOnLoad() {
	var nameSpot = document.getElementbyId ('name');

	var userName = prompt("What is your name?");

	nameSpot.innerHTML = ", " + userName;
}

changeNameOnLoad ();