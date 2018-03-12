
window.onload = function (){
		if (window.localStorage && localStorage.highScore){
			document.getElementById('hpnt').innerHTML = localStorage.highScore;
			}
	}