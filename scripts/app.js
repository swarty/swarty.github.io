document.addEventListener('DOMContentLoaded', function () {
   
	if(document.querySelector('.hello')){
		
		setInterval( () => {

			document.querySelector('.hello').classList.toggle('hello--change');

		}, 4000 )

	}
   
})
