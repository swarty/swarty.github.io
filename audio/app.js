'use strict'
window.addEventListener('DOMContentLoaded', function () {

	const data = {
		audio: document.getElementById('audio'),
		lines: document.querySelectorAll('.line'),
		context: null,
		analyzer: null,
		src: null,
		valueArray: null,
	};

	window.addEventListener('click', audioTrigger);

	function audioTrigger() {
		if(!data.context) preparation();
		if(data.audio.paused) {
			data.audio.play();
			return;
		};
		
		data.audio.pause();
		return;
	}

	function preparation() {
		data.context = new AudioContext();
		data.analyzer = data.context.createAnalyser();
		data.src = data.context.createMediaElementSource(data.audio);
		data.src.connect(data.analyzer);
		data.analyzer.connect(data.context.destination);
		loop();
	}

	function loop() {
		// console.log(data.audio.paused)
		// if(!data.audio.paused) {
		window.requestAnimationFrame(loop);
		// 	console.log('shit')
		// }

		data.valueArray = new Uint8Array(data.analyzer.frequencyBinCount);
		data.analyzer.getByteFrequencyData(data.valueArray);

		for(let i = 0, length = data.lines.length; i < length; i++) {
			let val = data.valueArray[i];
			data.lines[i].style.height = +(val > 0 ? val : 20) * 0.25 + 'px';
		}


		
	}

})
