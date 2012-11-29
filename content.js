// var room = $('.roomView').children('div').eq(1);
// var top = $('#top-panel');
// if (room.css('display') == 'block') {
// 	var toWhat = 'none';
// 	$('#outer').css('width', 'auto');
// //	$('body').css('background-color', '#ffffff');
// } else {
// 	var toWhat = 'block';
// 	$('#outer').css('width', '760');
// //	$('body').css('background-color', '#000000');
// }
// room.css('display', toWhat);
// $('#top-panel').css('display', toWhat);
// $('#footer').css('display', toWhat);



	$(document).ready(function(){


		// Add onclick handler to checkbox w/id checkme
	   e.click(function(){

		// If checked
		if (e.is(":checked"))
		{
			//show the hidden div
			e.element.id.show("fast");
		}
		else
		{
			//otherwise, hide it
			e.element.id.hide("fast");
		}
	  });

	});
