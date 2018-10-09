$(function() {
    var btns = $('.nav .row a'),
        tabsDiv = $('body>.tab-content>div');
    btns.eq(0).addClass('active');
    tabsDiv.eq(0).addClass('show');
    btns.on('click', function() {
        var _index = btns.index($(this));
        $(this).addClass('active').siblings().removeClass('active');
        tabsDiv.eq(_index).addClass('show').siblings().removeClass('show');

    })
})