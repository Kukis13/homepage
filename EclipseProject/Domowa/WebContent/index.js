$(document).ready(function() {
	removeAd();
	registerClickListeners();
});

function removeAd() {
	var prvspam = $("#prv_main_link");
	if (prvspam[0]) {
		prvspam[0].parentNode.removeChild(element);
	}
}

function registerClickListeners() {
	$('#start-button').click(function() {
		$(this).toggleClass("bar-button-down");
	});

	$('.icon').click(function(e) {
		var icons = $('.icon');
		for (i = 0; i < icons.length; i++) {
			if (icons[i] != this) {
				$(icons[i]).removeClass('icon-marked');
				$(icons[i]).removeClass('icon-text-editable');
			}
		}
		$(this).toggleClass("icon-marked");
		if ($(e.target).is('span') && !$(this).hasClass('icon-marked')) {
			$(e.target).attr('contentEditable', true);
			$(e.target).focus();
			$(this).addClass('icon-text-editable');
		}
	})
}