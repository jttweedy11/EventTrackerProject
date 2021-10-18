window.addEventListener('load', function(e) {
	console.log('create.js loaded');
	var btn = document.getElementById('a');
	console.log(btn);
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
}