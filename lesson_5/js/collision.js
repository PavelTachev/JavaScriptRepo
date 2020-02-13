function collision_check(x, y, data) {
	if (x > 7 || x < 0 || y > 7 || y < 0) {
		return {
			collision: false,
			allowed  : false,
			// piece    : null
		}
	}
	const piece = $(`.field#${x}_${y} .piece`);
	if (piece.length) {
		const piece_id     = piece.attr('id');
		const piece_coords = piece_id.split('_');

		if(data.color === piece_coords[0]) {
			return {
				collision: true,
				allowed  : false,
				// piece    : piece // Piece that we got from opponent.
			};
		}
		else { // different colors
			return {
				collision: true,
				allowed  : true,
				// piece    : piece
			};
		}
	}
	return { // no piece there, move freely
		collision: false,
		allowed  : true,
		// piece    : null
	}
}