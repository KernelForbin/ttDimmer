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