var logoHeight = $('#myDiv img').height();
if (logoHeight < 104) {
    var margintop = (104 - logoHeight) / 2;
    $('#myDiv img').css('margin-top', margintop);
}
