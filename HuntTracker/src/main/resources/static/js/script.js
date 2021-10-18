window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
});

function init() {
	console.log('in init()');
	document.huntForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let huntId = document.huntForm.huntId.value;
		if (!isNaN(huntId) && huntId > 0) {
			getHunt(huntId);
		}
	});
	
	document.aggregate.show.addEventListener('click', function(event) {
		event.preventDefault();
		getAggregate();
	})

	document.allHuntForm.listAll.addEventListener('click', function(event) {
		event.preventDefault();
		console.log('in List All');
		getAllHunts();
	});

	document.addHunt.addHunt.addEventListener('click', function(event) {
		event.preventDefault();
		console.log('in create');
		let hn = document.addHunt;
		console.log(hn.name.value);
		let newHunt = {
			name: hn.name.value,
			size: hn.size.value,
			notes: hn.notes.value,
			url: hn.url.value,
			eventDate: new Date().toJSON().slice(0, 10)
		};
		console.log(newHunt);
		postNewHunt(newHunt);
	});


}

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

function getAllHunts() {
	var xhr = new XMLHttpRequest();
	var path = 'api/hunts/';
	xhr.open('GET', path, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 400) {
				let hunts = JSON.parse(xhr.responseText);
				console.log(hunts);
				displayHunts(hunts);
			}
		}
	};
	xhr.send(null);
}


function displayHunts(hunts) {
	let huntsDiv = document.getElementById('allHunts');
	huntsDiv.textContent = '';
	let table = document.createElement('table');
	let tblBody = document.createElement('tbody');
	let thead = document.createElement('thead');
	let th = document.createElement('th');
	th.textContent = 'Name';
	thead.appendChild(th);
	let th2 = document.createElement('th');
	th2.textContent = 'Size (acr)';
	thead.appendChild(th2);
	let th3 = document.createElement('th')
	th3.textContent = 'Notes';
	thead.appendChild(th3);
	let th4 = document.createElement('th');
	th4.textContent = 'URL';
	thead.appendChild(th4);
	let th5 = document.createElement('th');
	th5.textContent = 'Event Date';
	thead.appendChild(th5);
	let th6 = document.createElement('th');
	th6.textContent = 'Delete';
	thead.appendChild(th6);
	let th7 = document.createElement('th');
	th7.textContent = 'Edit';
	thead.appendChild(th7);
	for (hunt of hunts) {
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.textContent = hunt.name;
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.textContent = hunt.size;
		tr.appendChild(td2);

		tblBody.appendChild(tr);

		let td3 = document.createElement('td');
		td3.textContent = hunt.notes;
		tr.appendChild(td3);

		let td4 = document.createElement('td');
		td4.textContent = hunt.url;
		tr.appendChild(td4);

		let td5 = document.createElement('td');
		td5.textContent = hunt.eventDate;
		tr.appendChild(td5);

		let td6 = document.createElement('td');
		let btn = document.createElement('button');
		td6.appendChild(btn);
		tr.appendChild(td6);
		btn.textContent = 'Delete Hunt';
		btn.name = "deleteHunt";
		btn.value = hunt.id;
		btn.addEventListener('click', function(event) {
			event.preventDefault();
			deleteHunt(btn.value);
		});

		let td7 = document.createElement('td');
		var editbtn = document.createElement('button');
		td7.appendChild(editbtn);
		tr.appendChild(td7);
		editbtn.textContent = 'Edit Hunt';
		editbtn.name = "editHunt";
		editbtn.value = hunt;
		editbtn.addEventListener('click', function(event) {
			event.preventDefault();
			editHunt(hunt);
		});
	}
	table.appendChild(thead);
	table.appendChild(tblBody);
	huntsDiv.appendChild(table);
}

function editHunt(hunt) {
	var dataDiv = document.getElementById('editData');
	console.log(hunt);
	let form = document.createElement('form');
	form.name = "editHunt";
	let input = document.createElement('input');
	input.type = "text";
	input.name = "name";
	input.placeholder = hunt.name;
	console.log(form);
	form.appendChild(input);
	dataDiv.appendChild(form);
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
	let a = document.createElement('a');
	a.href = hunt.url;
	a.textContent = hunt.url;
	li.appendChild(a);
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = hunt.eventDate;
	ul.appendChild(li);
	li = document.createElement('li');
	a = document.createElement('a');
	a.href = 'huntDetails.html';
	a.textContent = 'Edit Hunt';
	a.id = hunt.id;
	li.appendChild(a);
	ul.appendChild(li);


}

function postNewHunt(newHunt) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/hunts/create');
	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.responseText === 201) {
				let hunt = JSON.parse(xhr.responseText);
				displayHunt(hunt);
			}
		}
		else {

		}
	};

	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newHunt));
}

function deleteHunt(huntId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/hunts/delete/' + huntId);
	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		console.log(xhr.status);
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				alert("The hunt was removed");
				getAllHunts();
			}
		}
	};
	xhr.send();

}

