$(document).ready(function() {
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		evt.preventDefault(); 
		// swap image
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
		
		//swap caption
		var caption = $(this).attr("title");
		$("#caption").text(caption);
				
		// cancel the default action of the link
	   
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready