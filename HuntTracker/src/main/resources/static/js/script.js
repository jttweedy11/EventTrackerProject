window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
});

function init() {
	console.log('in init()');
	document.huntForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var huntId = document.huntForm.huntId.value;
		if (!isNaN(huntId) && huntId > 0) {
			getHunt(huntId);
		}
	})
}

// TODO
// * Retrieve all hunts and display in table
// * Click on a hunt to display details
// * Button to delete a hunt.
// * Button to update, load hunt into form inputs with button to PUT

function getHunt(huntId) {
	var xhr = new XMLHttpRequest();
	var path = 'api/hunts/' + huntId;
	console.log(path);
	xhr.open('GET', path, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 400) {
				let data = JSON.parse(xhr.responseText);
				displayHunt(data);
			}
		}
	};
	xhr.send(null);
}

function displayHunt(hunt) {
	var dataDiv = document.getElementById('huntData');
	dataDiv.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = hunt.name;
	dataDiv.appendChild(h1);
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	let li = document.createElement('li');
	li.textContent = hunt.size;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = hunt.notes;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = hunt.url;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = hunt.eventDate;
	ul.appendChild(li);
	



}




