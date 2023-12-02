$(document).ready(function () {


    $(".option-select").click(function () {
        $(this).parent().toggleClass("show-options");
        $(this).parent().siblings().children(".option-list").fadeOut();
        $(this).siblings(".option-list").fadeToggle();
    })


    $('.tab-button').click(function () {
        $('.tab-button').removeClass('activeTabLink');
        $(this).addClass('activeTabLink');
        var target = $(this).data('target');
        $('.tab-content').removeClass('activeTab');
        $('#' + target).addClass('activeTab');
    });

});