function move(field_new_id, data) {
	let field_new_arr     = field_new_id.split('_');
	let w_king_moved      = 0;
	let b_king_moved      = 0;
	let w_rook_1_moved    = 0;
	let w_rook_2_moved    = 0;
	let b_rook_1_moved    = 0;
	let b_rook_2_moved    = 0;

	// Cleans the field we are leaving.
	$(`.field#${data.x}_${data.y}`).empty();
	$(`.field#${field_new_arr[0]}_${field_new_arr[1]}`).empty();

	// Creates the figure in the new field.
	create_figure(field_new_arr[0], field_new_arr[1], data.color + '_' + data.type);

	// Pawn at the end of the board becomes queen.
	if(data.type === 'p' && (field_new_arr[1] === '0' || field_new_arr[1] === '7')) {
		$(`.field#${field_new_arr[0]}_${field_new_arr[1]}`).empty();
		create_figure(field_new_arr[0], field_new_arr[1], data.color + '_' + 'q');
	}

	// Rokada
	if(!w_king_moved && !w_rook_2_moved && data.color === 'w' && data.type === 'g' && field_new_arr[0] === '6' && field_new_arr[1] === '7') {
		w_king_moved   = 1;
		w_rook_2_moved = 1;

		$(`.field#${data.x + 3}_${data.y}`).empty();

		create_figure(field_new_arr[0] - 1, field_new_arr[1], data.color + '_' + 't');
	}
	else if(!w_king_moved && !w_rook_1_moved && data.color === 'w' && data.type === 'g' && field_new_arr[0] === '2' && field_new_arr[1] === '7') {
		w_king_moved   = 1;
		w_rook_1_moved = 1;

		$(`.field#${0}_${data.y}`).empty();
		create_figure(Number(field_new_arr[0]) + 1, field_new_arr[1], data.color + '_' + 't');
	}

	if(!b_king_moved && !b_rook_2_moved && data.color === 'b' && data.type === 'g' && field_new_arr[0] === '6' && field_new_arr[1] === '0') {
		b_king_moved   = 1;
		b_rook_2_moved = 1;

		$(`.field#${data.x + 3}_${data.y}`).empty();

		create_figure(field_new_arr[0] - 1, field_new_arr[1], data.color + '_' + 't');
	}
	else if(!b_king_moved && !b_rook_1_moved && data.color === 'b' && data.type === 'g' && field_new_arr[0] === '2' && field_new_arr[1] === '0') {
		b_king_moved   = 1;
		b_rook_1_moved = 1;

		$(`.field#${0}_${data.y}`).empty();
		create_figure(Number(field_new_arr[0]) + 1, field_new_arr[1], data.color + '_' + 't');
	}

	if(data.color === 'w' && data.type === 'g' && data.x === '4' && data.y === '7') 
		w_king_moved = 1;
	if(data.color === 'b' && data.type === 'g' && data.x === '4' && data.y === '0')
		b_king_moved = 1;

	if(data.color === 'w' && data.type === 't' && data.x === '0' && data.y === '7') 
		w_rook_1_moved = 1;
	if(data.color === 'w' && data.type === 't' && data.x === '7' && data.y === '7')
		w_rook_2_moved = 1;

	if(data.color === 'b' && data.type === 't' && data.x === '0' && data.y === '0')
		b_rook_1_moved = 1;
	if(data.color === 'b' && data.type === 't' && data.x === '7' && data.y === '0')
		b_rook_2_moved = 1;

	change_turn();
}