function select_piece(data, field, piece) {
	const possible_moves = get_possible_moves(data);

	/* for (const element of array) {} doesn't work with objects
	   for (const index in array)   {} works with objects */

	for (const field_id of possible_moves) { // foreach move
		const field = $('.field#' + field_id);
		field.addClass('greenBG');

		field.click(function () {
			move(field_id, data);
		});
	}
}

function get_possible_moves(data) {
	switch (data.type) {
		case 'p':
			return select_piece_p(data);
		default:
			break;
	}
}

function select_piece_p(data) {
	const possible_moves = [];

	if(data.color === 'w') {
		let check = collision_check(data.x, data.y - 1, data);
		if(check.allowed && !check.collision) {
			possible_moves.push(`${data.x}_${data.y - 1}`);
			if (data.y === 6) {
				let check = collision_check(data.x, data.y - 2, data);
				if(check.allowed && !check.collision)
					possible_moves.push(`${data.x}_${data.y - 2}`);
			}
		}
		check = collision_check(data.x + 1, data.y - 1, data);	
		if(check.allowed && check.collision) {
			possible_moves.push(`${data.x + 1}_${data.y - 1}`);
		}	
		check = collision_check(data.x - 1, data.y - 1, data);	
		if(check.allowed && check.collision) {
			possible_moves.push(`${data.x - 1}_${data.y - 1}`);
		}	
	}
	else {
		let check = collision_check(data.x, data.y + 1, data);
		if(check.allowed && !check.collision) {
			possible_moves.push(`${data.x}_${data.y + 1}`);
			if (data.y === 1) {			
				let check = collision_check(data.x, data.y + 2, data);
				if(check.allowed && !check.collision)
					possible_moves.push(`${data.x}_${data.y + 2}`);
			}
		}
		check = collision_check(data.x + 1, data.y + 1, data);	
		if(check.allowed && check.collision) {
			possible_moves.push(`${data.x + 1}_${data.y + 1}`);
		}	
		check = collision_check(data.x - 1, data.y + 1, data);	
		if(check.allowed && check.collision) {
			possible_moves.push(`${data.x - 1}_${data.y + 1}`);
		}			
	}
	return possible_moves;
}

function select_piece_k() {}

function select_piece_t() {}

function select_piece_o() {}

function select_piece_q() {}

function select_piece_g() {}