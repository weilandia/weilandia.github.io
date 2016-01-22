var logoHeight = $('#myDiv img').height();
if (logoHeight < 104) {
    var margintop = (104 - logoHeight) / 2;
    $('#myDiv img').css('margin-top', margintop);
}

// $(function(){
//     $(".element").typed({
//         strings: ["Hi.^1000 I'm Nick.", "It's a big world out there.^3000 \nLet's make it better."],
//         typeSpeed: 0
//     });
// });
