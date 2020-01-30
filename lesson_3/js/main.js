$(document).ready(function() {

	//$(SELECTOR).doSomething();

	// setTimeout -> delay execution
	// setInterval -> execute over time

	// p -> get me all paragraphs
	// #musaka -> get me all elements with an id = "musaka"
	// .musaka -> get me all elements with a class = "musaka"

	/* Section 1 */
	const paragraph_1 = $('#div-1 p');
	// paragraph_1.on('click', function () {
		paragraph_1.click(function () {
		$this = $(this);
		$this.fadeOut(500);
		setTimeout (function (){
			$this.fadeIn(500);
		}, 500);
	});
    /* END Section 1 */

	/* Section 2 */
	$('#div-2 #swap').click(function () {
		const paragraph_2_1 = $('#div-2 p#one');
		const paragraph_2_2 = $('#div-2 p#two');

		const value_text_one = paragraph_2_1.text();
		const value_text_two = paragraph_2_2.text();

		paragraph_2_1.text(value_text_two);
		paragraph_2_2.text(value_text_one);
	});
	/* END Section 2 */

	/* Section 3 */	
	$('#div-3 #sum').click(function () {
		const input_1       = $('#div-3 #num-one');
		const input_2       = $('#div-3 #num-two');
		const input_value_1 = Number(input_1.val());
		const input_value_2 = Number(input_2.val());
		const result        = input_value_1 + input_value_2;
		$('#div-3 #result').text('Result: ' + result);

		input_1.val('');
		input_2.val('');
	});
	/* END Section 3 */

	/* Section 4 */
	$('#div-4 #fix').click(function () {
		// $('#div-4 .red')   .css('color', 'red');
		// $('#div-4 .blue')  .css('color', 'blue');
		// $('#div-4 .green') .css('color', 'green');
		// $('#div-4 .yellow').css('color', 'yellow');
		const paragraphs = $('#div-4 p');
		paragraphs.each(function() {
			const $this  = $(this);
			const colour = $this.attr('class');
			// $this.css('property', 'value');
			// $this.css('color', colour);
			$this.css({
				'color'          : colour,
				'backgroundColor': 'black'
			});
		});
	});
	/* END Section 4 */

	/* Section 5 */
	$('#div-5 #before').click(function () {
		const html = '<p>I am before.</p>';
		$('#div-5 #alfa').before(html);
	});
	$('#div-5 #after').click(function () {
		const html = '<p>I am after.</p>';
		$('#div-5 #alfa').after(html);
	});
	/* END Section 5 */

	/* Section 6 */
	$('#div-6 #del').click(function () {
		const paragraphs = $('#div-6 p');
		const len        = paragraphs.length;
		if(len) {
		const random     = Math.floor(Math.random() * len);
		// paragraphs.eq(random).remove();
		paragraphs
			.eq(random).
			remove();
		}
		else
			alert('No more victims to kill!!!')
	});
	/* END Section 6 */

	/* Section 7 */
	$('#div-7 #catch').click(function () {
		$('#div-7')
			.find('#crime')
			.css('fontSize', '35px');

	});
	/* END Section 7 */

	/* Section 8 */

	/* END Section 8 */
});