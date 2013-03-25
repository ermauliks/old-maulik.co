/* =jcarouselite
============================================================================== */
	
$(document).ready(function() {

	/* Past Events page
	-------------------------------------------------------------------------- */
	
		$("#past-event-photos .previews").jCarouselLite({
	    	visible: 4,
   		 	start: 0,
   		 	scroll: 4,
	        btnNext: ".next",
	        btnPrev: ".prev",
	        easing: "easeInOutQuart",
	        speed: 800
	    });
	    
	   $("##past-event-photos .prev, ##past-event-photos .next").click(function(){
	    	return false;
	    });
	    
	    $("#past-event-photos .previews img").click(function() {
    		$("#past-event-photos .full-size img").attr("src", $(this).attr("src"));
		})

	    
}); // end jQuery ready
