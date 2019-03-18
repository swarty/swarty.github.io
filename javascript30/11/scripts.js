function video(){

	const video = document.querySelector('.player__video'),
				playButton = document.querySelector('.player__button'),
				volumeRange = document.querySelector('.player__slider[name="volume"]'),
				playBackRange = document.querySelector('.player__slider[name="playbackRate"]'),
				skipButtons = document.querySelectorAll('.player__button'),
				progressBar = document.querySelector('.progress__filled');

	video.currentTime = 0;
				
	video.addEventListener('click', playPauseVideo);
	playButton.addEventListener('click', playPauseVideo);
	
	volumeRange.addEventListener('change', slideVideoTime);
	playBackRange.addEventListener('change', changeVideoSpeed);

	skipButtons.forEach( button => {
		button.addEventListener('click', function() {
			video.currentTime = video.currentTime + +this.dataset.skip;
		})
	})

	video.addEventListener('timeupdate', modifyProgressBar);

	function modifyProgressBar(e) {
		console.log(video.currentTime / video.duration)
		progressBar.style.flexBasis = video.currentTime / video.duration * 100 + '%';
	}

	function playPauseVideo() {
		return video.paused ? video.play() : video.pause();		
	}

	function slideVideoTime() {
		video.currentTime = video.duration * this.value;
	}

	function changeVideoSpeed() {
		video.playbackRate = 1 * this.value;
	}

}
video();