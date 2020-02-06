const css          = {
	left_0   : {left: '0%'},
	left_100 : {left: '100%'},
	left__100: {left: '-100%'},
};
let is_animate = false;
let interval;

const move_left  = (slides) => {
	is_animate           = true;
	const active_element = slides.filter('.active');
	const length         = slides.length;
	const active_id      = Number(active_element.attr('id').split('_')[1]);
	const next_id        = active_id + 1 < length ? active_id + 1 : 0;
	const next_element   = slides.filter('#slide_' + next_id);

	next_element  .css(css.left_100);
	active_element.css(css.left_0);

	next_element  .animate(css.left_0   , 1000 + 1);
	active_element.animate(css.left__100, 1000, function () {
		slides.removeClass('active');
		next_element.addClass('active');
		is_animate = false;
	});
};
const move_right  = (slides) => {
	is_animate           = true;
	const active_element = slides.filter('.active');
	const length         = slides.length;
	const active_id      = Number(active_element.attr('id').split('_')[1]);
	const next_id        = active_id - 1 < 0 ? length - 1 : active_id - 1;
	const next_element   = slides.filter('#slide_' + next_id);

	next_element  .css(css.left__100);
	active_element.css(css.left_0);

	next_element  .animate(css.left_0   , 1000 + 1);
	active_element.animate(css.left_100 , 1000, function () {
		slides.removeClass('active');
		next_element.addClass('active');		
		is_animate = false;
	});
};
const init       = () => {
	const slides = $('.container--slides--slide');
	interval = setInterval(move_right, 3000, slides);

	$(document).on('keyup', function(e){
		const keycode = e.which;
		if(!is_animate) {
			switch (keycode) {
				case 39:
					clearInterval(interval);
					interval = setInterval(move_right, 3000, slides);
					move_right(slides);
					break;
				case 37:
					clearInterval(interval);
					interval = setInterval(move_right, 3000, slides);
					move_left(slides);
					break;
				default:
					break;
			}
		}
	});
};

window.onload    = init();