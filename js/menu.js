window.onload = function() {
	var menu = document.getElementById('menu'),
		icon_menu = document.getElementById('icon-menu'),
		body = document.querySelector('body');

	icon_menu.addEventListener('click', function(){
		menu.classList.toggle('alternar-menu');
		body.classList.toggle('scroll');
	});
}