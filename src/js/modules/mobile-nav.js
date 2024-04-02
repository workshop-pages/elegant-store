function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const navClose = document.querySelector('.mobile-nav--close');
	const mobileFade = document.querySelector('.mobile-nav-fade');


	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		mobileFade.classList.toggle('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	};

	navClose.onclick = closeMobileNav;

	mobileFade.onclick = closeMobileNav;

	function closeMobileNav() {
		nav.classList.remove('mobile-nav--open');
		mobileFade.classList.remove('mobile-nav-fade--open');
		document.body.classList.remove('no-scroll');
	};

	nav.addEventListener('click', function (e) {
		e.stopPropagation();
	})
}

export default mobileNav;