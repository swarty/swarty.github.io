function timer() {
	let timerWasStarted = 0,
			timerWillEnded = new Date().getTime();

	const timeLeftHolder = document.querySelector('.display__time-left'),
				timeEndHolder = document.querySelector('.display__end-time'),
				buttons = document.querySelectorAll('.timer__button'),
				form = document.querySelector('#custom');

	// print timer at start
	printTimer();

	// loop
	setInterval( _ => {
		printTimer();
	}, 1000)

	// events
	buttons.forEach( button => button.addEventListener('click', updateTimer));
	form.addEventListener('submit', updateTimer);

	function updateTimer(e){
		const time = {
			data: this.dataset.time,
		};
		
		// if function called when entry number from keyboard
		if(this.querySelector('input')){
			e.preventDefault();
			time.minutes = Math.floor(Number(this.querySelector('input').value));
			time.seconds = 0;
		} else {
			time.minutes = Math.floor(time.data / 60);
			time.seconds = time.data % 60;
		}
		time.hours = '0';

		timerWasStarted = new Date().getTime();
		timerWillEnded = timerWasStarted + calcMiliseconds(time);
		printTimer();
	}

	function calcMiliseconds({hours, minutes, seconds}){
		return Number(hours) * 3600 * 1000 + Number(minutes) * 60 * 1000 + Number(seconds) * 1000
	}

	function printTimer(){
		let backTimer = new Date(timerWillEnded - new Date().getTime());
		if(timerWillEnded - new Date().getTime() > 0){
			timeLeftHolder.textContent = `${(backTimer.getMinutes() + '').length < 2 ? '0' + backTimer.getMinutes() : backTimer.getMinutes()}:${(backTimer.getSeconds() + '').length < 2 ? '0' + backTimer.getSeconds() : backTimer.getSeconds()}`;
		} else {
			timeLeftHolder.textContent = `00:00`;
		}
		
		let futureTimer = new Date(timerWillEnded);
		timeEndHolder.textContent = `Be back at ${futureTimer.getHours()}:${(futureTimer.getMinutes() + '').length < 2 ? '0' + futureTimer.getMinutes() : futureTimer.getMinutes()}`;
	}
}


timer();