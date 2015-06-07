$(document).ready(function() {
	var prvspam = $("#prv_main_link");
	if (prvspam[0]) {
		prvspam[0].parentNode.removeChild(element);
	}
	
	$('#start-button').click(function() {
		$(this).toggleClass("bar-button-down");
	});
	
	$('.icon').click(function(){
		var icons = $('.icon');
		for(i=0; i<icons.length; i++){
			$(icons[i]).removeClass('icon-marked');
		}
		$(this).toggleClass("icon-marked");
	})
});