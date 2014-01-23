'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(formSubmit);	
}

function projectClick(e) { 
	//print string to browser's console
	console.log("Project clicked");
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    $(this).css("background-color", "#7fff00");

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else if(description.css("display") == "none"){ 
       description.fadeIn();
    } else {
    	description.fadeOut();
    }
}

function formSubmit(e) {
	console.log("Submit button clicked");
	var selectedProject = $('#project').val();
	$(selectedProject).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(selectedProject + " .project-description").text(newText);
}