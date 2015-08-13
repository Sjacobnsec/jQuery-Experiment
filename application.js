$(document).ready(function() {
	$('button').on('click', function() {
		var price = $('<p>From $399.99</p>');
		$('.vacation').append(price);
		//$('button').remove(); This removes all the buttons on the page
		$(this).remove(); //this removes just the clicked button
	});
});