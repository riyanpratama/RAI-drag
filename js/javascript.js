$(document).ready(function(){
	$('#btnReload').hide();

	$('#square').draggable({
		containment: '#container',
		cursor: 'move',
	});

	$('#box').droppable({
		accept: '#square',
		drop: handleDropEvent,
      	tolerance:'pointer'
	});

	$('#btnReload').click(function(){
		location.reload(true);
	});

	function handleDropEvent(event, ui){
		ui.draggable.addClass('correct');
		ui.draggable.draggable('disable');
		$(this).droppable('disable');
		ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
		ui.draggable.draggable('option', 'revert', false);

		$('#btnReload').show();
		$('#square').html('<p align="center">Done!</p>');
	}



});