
function mobileView() {
	if (document.getElementById('navbar').style.display == 'block') {
	document.getElementById('navbar').style.display = 'none';
	} else {
	document.getElementById('navbar').style.display = 'block';
	}
	}
	document.getElementById('menuicon').addEventListener('click', mobileView);
	
	function resentMenu() {
	if (window.innerWidth >= 900) {
	document.getElementById('navbar').style.display = 'flex';
	} else if (window.innerWidth < 900) {
	document.getElementById('navbar').style.display = 'none';
	}
	}
	window.addEventListener('resize', resetMenu);
