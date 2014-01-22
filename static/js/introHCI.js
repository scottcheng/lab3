'use strict';

// Call this function when the page loads (the 'ready' event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#testjs').click(function(e) {
		$(this).text('Please wait...');
    $(this).closest('.jumbotron').toggleClass('active');
	});

  $('a.thumbnail').click(projectClick);

  $('#submitBtn').click(updateProject); 

  appendDescriptions();
}

function projectClick(e) {
  e.preventDefault();

  var projectTitle = $(this).find('p').text();
  var jumbotronHeader = $('.jumbotron h1');
  jumbotronHeader.text(projectTitle);

  $(this).find('.description').slideToggle(250);
}

function updateProject(e) {
  e.preventDefault();

  var width = $('#width').val();
  if (!width) {
    return;
  }

  var projectID = $('#project').val();
  $(projectID).animate({
    width: width
  });

  $(projectID + ' .project-description').text($('#description').val());
}

function appendDescriptions() {
  $('.project > a').append('<div class="description"><b>Description</b><br />Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>')
}
