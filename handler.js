function saveHandler() {
	const userInput = document.getElementById('userInput').value;
	if (!isNaN(userInput)) {
		var ul = document.getElementById('number');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(userInput));
		ul.appendChild(li);
	} else {
		var ul = document.getElementById('str');
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(userInput));
		ul.appendChild(li);
	}
	input = '';
}
