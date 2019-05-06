window.onload = () => {
	document.getElementById('next').addEventListener('click', () => {
		let active = document.querySelector('.active');
		let items = [...document.getElementsByClassName('items')];
		if(active.nextElementSibling){
			active.classList.remove('active');
			active.nextElementSibling.classList.add('active');
		} else{
			active.classList.remove('active');
			items[0].classList.add('active');
		}
	});
	document.getElementById('prev').addEventListener('click', () => {
		let active = document.querySelector('.active');
		let items = [...document.getElementsByClassName('items')];
		if(active.previousElementSibling){
			active.classList.remove('active');
			active.previousElementSibling.classList.add('active');
		} else{
			active.classList.remove('active');
			items[(items.length-1)].classList.add('active');
		}
	});
	let icon = document.getElementById('navSquare');
	icon.addEventListener('click', () => {
		let nav = document.getElementById('navBar');
		if(icon.classList.contains('menuOpen')){
			icon.classList.remove('menuOpen');
		} else {
			icon.classList.add('menuOpen');
		}
		if(nav.classList.contains('staticNav')){
			nav.classList.remove('staticNav');
			nav.classList.add('navOpen');
		} else{
			nav.classList.remove('navOpen');
			nav.classList.add('staticNav');
		}		
	});
}