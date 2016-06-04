/********************************************************************************
	ANIMATED TEXT CONTAINER LOGIC
********************************************************************************/
( () => {
	/* Message String */
	let message = `
	function welcome ( person ) {
		if( person.name !== 'Juan') {
			console.log(\`Welcome \${person.name}\`);
		} else {
			console.log('You are the chosen Juan!');
		}
	}      .           .
	`;
	/* GET TEXT CONTAINER */
	const message_container = document.querySelector('.txt-container');

	/* STATE VARIABLES */
	let currentMessage = "";
	let message_array = message.split('');
	let counter = 0;

	/* Fucnction that renders the text into the text container */
	function render( msg , counter)  {
		if ( counter % 4 === 0 )
			message_container.innerHTML = msg + '<span class="cursor">|</span>';
		else
			message_container.innerHTML = msg;
	}

	function nextCharacter () {
		counter ++;

		let chars = message_array.shift();

		if ( chars.charCodeAt(0) === 9 ){
			chars = " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
		}

		if ( chars.charCodeAt(0) === 10 ){
			chars = "<br />"
		}

		if ( message_array.length > 0 ) {
			currentMessage += chars;
		} else {
			message_array = message.split('');
			currentMessage = '';
			counter = 0;
		}

		render( currentMessage , counter );
	}

	setInterval( nextCharacter , 100 );

})();

/********************************************************************************
	ANIMATED TEXT CONTAINER LOGIC BLOCK
********************************************************************************/



/********************************************************************************
	ANIMATED TEXT CONTAINER LOGIC BLOCK
********************************************************************************/



/********************************************************************************
	ANIMATED TEXT CONTAINER LOGIC BLOCK
********************************************************************************/



/********************************************************************************
	ANIMATED TEXT CONTAINER LOGIC BLOCK
********************************************************************************/
