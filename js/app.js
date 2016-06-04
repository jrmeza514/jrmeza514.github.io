let person = {
	name: '${person.name}'
};

const MESSAGE = `
function welcome ( person ) {
	if( person.name !== 'Juan') {
		console.log(\`Welcome ${person.name}\`);
	} else {
		console.log('You are the chosen Juan!');
	}
}      .           .
`
const message_container = document.querySelector('.txt-container');


let currentMessage = "";
let MESSAGE_ARRAY = MESSAGE.split('');
let counter = 0;

setInterval(() => {
	let chars = MESSAGE_ARRAY.shift();
	if ( chars.charCodeAt(0) === 9 ){
		chars = " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
	}

	if ( chars.charCodeAt(0) === 10 ){
		chars = "<br />"
	}

	counter++;
	if ( MESSAGE_ARRAY.length > 0 ) {
		currentMessage += chars;
	}
	else {
		MESSAGE_ARRAY = MESSAGE.split('');
		currentMessage = '';
		counter = 0;
	}
	render();
}, 250);

function render() {

	if ( counter % 4 === 0 )
		message_container.innerHTML = currentMessage + '<span class="cursor">|</span>';
	else
		message_container.innerHTML = currentMessage;
}
