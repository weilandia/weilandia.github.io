var logoHeight = $('#myDiv img').height();
if (logoHeight < 104) {
    var margintop = (104 - logoHeight) / 2;
    $('#myDiv img').css('margin-top', margintop);
}

$(function() {
    var words = ['Hi', 'Hello', 'Hey'],
        index = 0,
        $el = $('#rotate-word')
    setInterval(function() {
        index++ < words.length - 1 || (index = 0);
        $el.fadeOut(function() {
            $el.text(words[index]).fadeIn();
        });
    }, 2500);
});

$(function(){
    $(".element").typed({
        strings: ["Hi.^1000 I'm Nick.", "It's a big world out there.^3000 \nLet's make it better."],
        typeSpeed: 0
    });
});
