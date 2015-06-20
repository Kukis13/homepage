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
		resetIcons();
	});
	$('#start-button').click(function() {
		$(this).toggleClass("bar-button-down");
	});

	$('.icon').click(function(e) {
		resetIcons();
		$(this).toggleClass("icon-marked");
		if ($(e.target).is('span') && !$(this).hasClass('icon-marked')) {
			$(e.target).attr('contentEditable', true);
			$(e.target).focus();
			$(this).addClass('icon-text-editable');
		}
		e.stopPropagation();
	});

	$('.icon').dblclick(function(e) {
		var target = e.currentTarget;
		if ($(target).hasClass('icon')) {
			openApplication(target.id);
			return;
		}
		var parents = $(e.currentTarget).parents();
		for (i = 0; i < parents.length; i++) {
			if ($(parents[i]).hasClass('icon')) {
				openApplication(parents[i].id);
			}
		}
		openApplication(e);
	});

	$("#desktop").mousedown(
			function(e) {

				var underElement = document.elementFromPoint(e.pageX, e.pageY);
				if ($(underElement).hasClass('icon')
						|| $(underElement).parent().hasClass('icon')) {
					return;
				} else {
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

function openApplication(applicationName) {
	resetIcons();
	switch (applicationName) {
	case 'ico-cv':
		showCV();
		break;
	default:
		showBSOD();
	}
}
