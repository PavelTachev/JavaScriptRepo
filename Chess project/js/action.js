function select_piece(data, field, piece) {
	const possible_moves = get_possible_moves(data);

	/* for (const element of array) {} doesn't work with objects
	   for (const index in array)   {} works with objects */

	for (const field_id of possible_moves) { // foreach move
		const field = $('.field#' + field_id);
		const field_data = field.attr('id').split('_');

		field.addClass('greenBG');

		field.click(function () {
			const piece = $(`.field#${field_data[0]}_${field_data[1]} .piece`);
			move(field_id, data);	

			if(piece.length) {
				const piece_data  = piece.attr('id').split('_');
				if(piece_data[1] === 'g') {
					if(piece_data[0] === 'w')
						alert("Blacks win");
					else
						alert("Whites win");

					// Reset the game
					main()
				}
			}			
		});
	}
}

function get_possible_moves(data) {
	switch (data.type) {
		case 'p':
			return select_piece_p(data);
		case 'k':
			return select_piece_k(data);
		case 't':
			return select_piece_t(data);
		case 'o':
			return select_piece_o(data);
		case 'q':
			return select_piece_q(data);
		case 'g':
			return select_piece_g(data);
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

function select_piece_k(data) {  // horse
	const possible_moves = [];

	let check = collision_check(data.x - 1, data.y - 2, data);
	if(check.allowed)
		possible_moves.push(`${data.x - 1}_${data.y - 2}`);

	check = collision_check(data.x + 1, data.y + 2, data);	
	if(check.allowed)
		possible_moves.push(`${data.x + 1}_${data.y + 2}`);

	check = collision_check(data.x - 1, data.y + 2, data);	
	if(check.allowed)
		possible_moves.push(`${data.x - 1}_${data.y + 2}`);
		
	check = collision_check(data.x + 1, data.y - 2, data);	
	if(check.allowed)
		possible_moves.push(`${data.x + 1}_${data.y - 2}`);

	check = collision_check(data.x - 2, data.y - 1, data);
	if(check.allowed)
		possible_moves.push(`${data.x - 2}_${data.y - 1}`);

	check = collision_check(data.x + 2, data.y + 1, data);	
	if(check.allowed)
		possible_moves.push(`${data.x + 2}_${data.y + 1}`);

	check = collision_check(data.x - 2, data.y + 1, data);	
	if(check.allowed)
		possible_moves.push(`${data.x - 2}_${data.y + 1}`);
		
	check = collision_check(data.x + 2, data.y - 1, data);	
	if(check.allowed)
		possible_moves.push(`${data.x + 2}_${data.y - 1}`);

	return possible_moves;
}


function select_piece_t(data) { // top
	const possible_moves = [];

	for (let i = 1; i < 8; i++) {
		let check = collision_check(data.x + i, data.y, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x + i}_${data.y}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x + i}_${data.y}`);
			break;
		}
		else
			break;
	}
	for (let i = 1; i < 8; i++) {
		check = collision_check(data.x, data.y + i, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x}_${data.y + i}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x}_${data.y + i}`);
			break;
		}
		else
			break;
	}
	for (let i = 1; i < 8; i++) {
		check = collision_check(data.x - i, data.y, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x - i}_${data.y}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x - i}_${data.y}`);
			break;
		}
		else
			break;
	}
	for (let i = 1; i < 8; i++) {
		check = collision_check(data.x, data.y - i, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x}_${data.y - i}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x}_${data.y - i}`);
			break;
		}
		else
			break;
	}
	return possible_moves;
}

function select_piece_o(data) { // oficer
	const possible_moves = [];

	for (let i = 1; i < 8; i++) {
		let check = collision_check(data.x + i, data.y + i, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x + i}_${data.y + i}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x + i}_${data.y + i}`);
			break;
		}
		else
			break;
	}
	for (let i = 1; i < 8; i++) {
		check = collision_check(data.x - i, data.y + i, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x - i}_${data.y + i}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x - i}_${data.y + i}`);
			break;
		}
		else
			break;
	}
	for (let i = 1; i < 8; i++) {
		check = collision_check(data.x - i, data.y - i, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x - i}_${data.y - i}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x - i}_${data.y - i}`);
			break;
		}
		else
			break;
	}
	for (let i = 1; i < 8; i++) {
		check = collision_check(data.x + i, data.y - i, data);
		if(check.allowed && !check.collision)
			possible_moves.push(`${data.x + i}_${data.y - i}`);
		else if(check.allowed && check.collision) {
			possible_moves.push(`${data.x + i}_${data.y - i}`);
			break;
		}
		else
			break;
	}
	return possible_moves;
} 


function select_piece_q(data) { // queen
	//const possible_moves = [];
	//possible_moves.push(select_piece_o(data).concat(select_piece_t(data)));  // Why doesn't this work?

	return select_piece_o(data).concat(select_piece_t(data));
} 


function select_piece_g(data) { // king
	const possible_moves = [];

	if(data.color === 'w') {
		let check = collision_check(data.x - 1, data.y - 1, data);
		if(check.allowed)
			possible_moves.push(`${data.x - 1}_${data.y - 1}`);

		check = collision_check(data.x + 1, data.y + 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x + 1}_${data.y + 1}`);

		check = collision_check(data.x - 1, data.y + 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x - 1}_${data.y + 1}`);
			
		check = collision_check(data.x + 1, data.y - 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x + 1}_${data.y - 1}`);
		
		check = collision_check(data.x, data.y - 1, data);
		if(check.allowed)
			possible_moves.push(`${data.x}_${data.y - 1}`);
	
		check = collision_check(data.x, data.y + 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x}_${data.y + 1}`);
		
		check = collision_check(data.x - 1, data.y, data);	
		if(check.allowed)
			possible_moves.push(`${data.x - 1}_${data.y}`);
		
		check = collision_check(data.x + 1, data.y, data);	
		if(check.allowed)
			possible_moves.push(`${data.x + 1}_${data.y}`);

		// Rokada
		let type;
		if(data.type === 'g') {
			let check_1 = collision_check(data.x + 1, data.y, data);
			let check_2 = collision_check(data.x + 2, data.y, data);
			if(check_1.allowed && check_2.allowed) {
				check = collision_check(data.x + 3, data.y, data);	
				// console.log(check.piece.attr('id'));
				type = check.piece.attr('id').split('_');
				console.log(type[1]);
				if(type[1] === 't')
					possible_moves.push(`${data.x + 2}_${data.y}`);
			}
			check_1     = collision_check(data.x - 1, data.y, data);
			check_2     = collision_check(data.x - 2, data.y, data);
			let check_3 = collision_check(data.x - 3, data.y, data);
			if(check_1.allowed && check_2.allowed && check_3.allowed) {
				check = collision_check(data.x - 4, data.y, data);						
				// console.log(check.piece.attr('id'));			
				type = check.piece.attr('id').split('_');
				console.log(type[1]);
				if(type[1] === 't')
					possible_moves.push(`${data.x - 2}_${data.y}`);
			}
		}
	}
	else {
		let check = collision_check(data.x - 1, data.y - 1, data);
		if(check.allowed)
			possible_moves.push(`${data.x - 1}_${data.y - 1}`);

		check = collision_check(data.x + 1, data.y + 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x + 1}_${data.y + 1}`);
		
		check = collision_check(data.x - 1, data.y + 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x - 1}_${data.y + 1}`);
		
		check = collision_check(data.x + 1, data.y - 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x + 1}_${data.y - 1}`);
		
		check = collision_check(data.x, data.y - 1, data);
		if(check.allowed)
			possible_moves.push(`${data.x}_${data.y - 1}`);
	
		check = collision_check(data.x, data.y + 1, data);	
		if(check.allowed)
			possible_moves.push(`${data.x}_${data.y + 1}`);
		
		check = collision_check(data.x - 1, data.y, data);	
		if(check.allowed)
			possible_moves.push(`${data.x - 1}_${data.y}`);
		
		check = collision_check(data.x + 1, data.y, data);	
		if(check.allowed)
			possible_moves.push(`${data.x + 1}_${data.y}`);

		// Rokada
		let type;
		if(data.type === 'g') {
			let check_1 = collision_check(data.x + 1, data.y, data);
			let check_2 = collision_check(data.x + 2, data.y, data);
			if(check_1.allowed && check_2.allowed) {
				check = collision_check(data.x + 3, data.y, data);	
				// console.log(check.piece.attr('id'));
				type = check.piece.attr('id').split('_');
				if(type[1] === 't')
					possible_moves.push(`${data.x + 2}_${data.y}`);
			}
			
			check_1     = collision_check(data.x - 1, data.y, data);
			check_2     = collision_check(data.x - 2, data.y, data);
			let check_3 = collision_check(data.x - 3, data.y, data);
			if(check_1.allowed && check_2.allowed && check_3.allowed) {
				check = collision_check(data.x - 4, data.y, data);						
				// console.log(check.piece.attr('id'));			
				type = check.piece.attr('id').split('_');
				if(type[1] === 't')
					possible_moves.push(`${data.x - 2}_${data.y}`);
			}
		}
		
	}
	return possible_moves;
}