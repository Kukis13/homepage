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
	$('body').click(function() {
		var icons = $('.icon');
		for (i = 0; i < icons.length; i++) {
			$(icons[i]).removeClass('icon-marked');
			$(icons[i]).removeClass('icon-text-editable');
			$(icons[i]).find('span').attr('contentEditable', false);
		}
	});
	$('#start-button').click(function() {
		$(this).toggleClass("bar-button-down");
	});

	$('.icon').click(function(e) {
		var icons = $('.icon');
		for (i = 0; i < icons.length; i++) {
			if (icons[i] != this) {
				$(icons[i]).removeClass('icon-marked');
				$(icons[i]).removeClass('icon-text-editable');
				$(icons[i]).find('span').attr('contentEditable', false);
			}
		}
		$(this).toggleClass("icon-marked");
		if ($(e.target).is('span') && !$(this).hasClass('icon-marked')) {
			$(e.target).attr('contentEditable', true);
			$(e.target).focus();
			$(this).addClass('icon-text-editable');
		}
		e.stopPropagation();
	});
	
	$('.icon').dblclick(function(e){
		openApplication(e);
	});

	$("#desktop").mousedown(function(e) {

		var underElement = document.elementFromPoint(e.pageX, e.pageY);
		if ($(underElement).hasClass('icon') || $(underElement).parent().hasClass('icon')) {
			return;
		}
		else{
			$('body').click();
		}
		$(".ghost-select").addClass("ghost-active");
		$(".ghost-select").css({
			'left' : e.pageX,
			'top' : e.pageY
		});

		initialW = e.pageX;
		initialH = e.pageY;

		$(document).bind("mousemove", openSelector);
        $(document).bind("mouseup", afterMouseUp);
	});
}

function openApplication(e){
}
