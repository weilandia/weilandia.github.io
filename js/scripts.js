var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};

window.onload = function() {
	var links = document.links;
	for(var h in links) {
		var rand = Math.floor(Math.random() * 10000);
		links[h].href += (links[h].href.indexOf('?') == -1 ? '?' : '&')+'rand='+rand;
	}
};
