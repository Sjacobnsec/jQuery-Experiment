$(document).ready(function() {
	$('button').on('click', function() {
		var price = $('<p>From $399.99</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove(); //this removes just the clicked button
	});
});