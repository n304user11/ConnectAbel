$(document).ready(function() {
    $('tr').on('click', function() {
		$(this).animate({'opacity':'0.5'},'slow');
		$(this).animate({'opacity':'1'},'slow');
		setTimeout(function() {
  	  $(location).attr('href', 'people.html');
  }, 300);

});
});
