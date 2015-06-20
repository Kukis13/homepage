var initialW;
var initialH;

function openSelector(e) {
    var w = Math.abs(initialW - e.pageX);
    var h = Math.abs(initialH - e.pageY);

    $(".ghost-select").css({
        'width': w,
        'height': h
    });
	
	$(".ghost-select").css({
		'left' : Math.min(e.pageX, initialW),
		'top' : Math.min(e.pageY, initialH)
	});
	
	selectElements(e);
}


function selectElements(e) {
    var maxX = 0;
    var minX = 5000;
    var maxY = 0;
    var minY = 5000;
    var totalElements = 0;
    var elementArr = new Array();
    $("#desktop .icon").each(function () {
        var aElem = $(".ghost-select");
        var bElem = $(this);
        var collision = doObjectsCollide(aElem, bElem);
        if(collision){
    		$(this).addClass("icon-marked");
        }
        else{
    		$(this).removeClass("icon-marked");
        }
    });
   
}

function afterMouseUp(e){
    $(document).unbind("mousemove", openSelector);
    $(document).unbind("mouseup", afterMouseUp);

    $(".ghost-select").removeClass("ghost-active");
    $(".ghost-select").width(0).height(0);
}

function doObjectsCollide(a, b) { // a and b are your objects
    var aTop = a.offset().top;
    var aLeft = a.offset().left;
    var bTop = b.offset().top;
    var bLeft = b.offset().left;
 
    return !(
        ((aTop + a.height()) < (bTop)) ||
        (aTop > (bTop + b.height())) ||
        ((aLeft + a.width()) < bLeft) ||
        (aLeft > (bLeft + b.width()))
    );
}

function resetIcons(){
	var icons = $('.icon');
	for (i = 0; i < icons.length; i++) {
		$(icons[i]).removeClass('icon-marked');
		$(icons[i]).removeClass('icon-text-editable');
		$(icons[i]).find('span').attr('contentEditable', false);
	}
}
