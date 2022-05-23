function playSound(idAudioElement) {

	document.querySelector(idAudioElement).play();
}

const keysList = document.querySelectorAll('.tecla');


for (let count = 0; count < keysList.length; count++) {

	const key = keysList[count];
	const instrument = key.classList[1];
	console.log(instrument);
	const idAudio = `#som_${instrument}`;

	key.onclick = () => { playSound(idAudio) }

	console.log(count);
}


