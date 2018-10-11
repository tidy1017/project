$(function() {
    $('.searchicon').click(function() {
        if ($('.fixsearch').hasClass('dpnone')) {
            $('.fixsearch').removeClass('dpnone').addClass('dpblock');
        } else if ($('.fixsearch').hasClass('dpblock')) {
            $('.fixsearch').removeClass('dpblock').addClass('dpnone');
        }
    });
});