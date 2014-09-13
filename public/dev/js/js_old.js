
$(function () {

    var $placeholder = $('input[placeholder]');

    if ($placeholder.length > 0) {

        var attrPh = $placeholder.attr('placeholder');

        $placeholder.attr('value', attrPh)
            .bind('focus',function () {

                var $this = $(this);

                if ($this.val() === attrPh)
                    $this.val('').css('color', '#fff');

            }).bind('blur', function () {

                var $this = $(this);

                if ($this.val() === '')
                    $this.val(attrPh).css('color', '#fff');

            });

    }

});


function search_func() {
    $('.search_btn').attr("disabled", true);

    $('.message').show().delay(5000).fadeOut();

    $('#eban').stop().animate({
        top: 0
    }, 1500, 'easeOutBounce').delay(5000).animate({
            top: -500
        }, 1500, 'easeOutBounce');

    $('.search_form').stop().delay(6000).animate({
        left: -9999
    }, 1500, 'easeOutBounce');
    setTimeout(function () {
        $('.fuck').fadeIn(500);
    }, 8000);
    setTimeout(function () {
        $('.here').fadeIn(500);
    }, 10000);

//            $('.search_form').stop().delay(9000).animate({
//                left: 0
//            }, 1500, 'easeOutBounce');
};

//function dynamic_nav()
//{
//    $('nav').toggleClass('nav_wide');
//    $('.arrow').toggleClass('arrow_wide');
//    $('nav ul.top_list').toggleClass('display');
//    $('nav .nav_text').toggleClass('hide');
//    var _width = $('.nav_wide').width();
//    $('.nav_image img').width(_width);
//
//};



function check_if_gey() {
    $('.gay_or_not').show();
    $('.gay').text('No');
    var $_attr = $('button.gay').attr('quie');
//    console.log($_attr);
    switch ($_attr) {
        case 'q1':

            $('.oritn_text').text('Do you like men?');
            $('button.gay').attr('quie', 'q2');
            break;
        case 'q2':

            $('.oritn_text').text('Do you watch gay porn?');

            $('button.gay').attr('quie', 'q3');
            break;
        case 'q3':

            $('.oritn_text').text('Do you like Justin Bieber?');

            $('button.gay').attr('quie', 'q4');
            break;

        case 'q4':

            $('.oritn_text').text('Do you know the guy on the image?');
            $('.black_image').show();
            $('#eban_orient').stop().animate({
                top: 0
            }, 1500, 'easeOutBounce');
            $('button.gay').attr('quie', 'q5');
            break;
        case 'q5':

            $('#eban_orient').stop().animate({
                top: -500
            }, 1500, 'easeOutBounce');

            $('.oritn_text').text('Do you suck dicks???');

            $('button.gay').attr('quie', 'q6');
            break;
        case 'q6':

            $('.oritn_text').text('ARE YOU GAY???');
            $('.black_image').hide();
            $('button.gay').attr('quie', 'q7');
            break;
        case 'q7':

            $('.oritn_text').text('ARE YOU SURE???');

            $('button.gay').attr('quie', 'q8');
            $('.gay').text('I am not gay');
            $('.gay_or_not').text('I am gay');
            break;
        case 'q8':
            $('.troll_image').show();
            $('#eban_orient').stop().animate({
                top: 0
            }, 1500, 'easeOutBounce');
            $('.oritn_text').text('Click the fucking button lol');
            $('.gay').hide();
            $('.gay_or_not').css('background-color', '#FF00FF');


            $('button.gay').attr('quie', 'q9');
            break;
//        case 'q9':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q10');
//            break;
//        case 'q10':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q11');
//            break;
//        case 'q11':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q12');
//            break;
//        case 'q12':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q13');
//            break;
//        case 'q13':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q14');
//            break;
//        case 'q14':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q15');
//            break;
//        case 'q15':
//
//            $('.oritn_text').text('Do you like men?');
//
//            $('button.gay').attr('quie', 'q16');
//            break;
    }


//    jQuery('.gay_or_not').click(function(){
//        $(this).data('clicked', true);
//    });
//        if(jQuery('#id').data('clicked')) {
//            //clicked element, do-some-stuff
//        } else {
//            //run function2
//        }
};


$(document).ready(function () {
//    $('.search_btn').click(function (e) {
//        e.preventDefault();
//            $.post("/backend/func.php", {"shit": 1});
//
//    })


    $('.search_btn').click(search_func);
    $('.gay').click(check_if_gey);
    $('.gay_or_not').click(function (e) {
       $('.orient_modal').addClass('orient_modal_show');
       $('.oritn_text, .gay_or_not, .gay, .troll_image').hide();
        $('.oritn_text, .gay_or_not, .gay, .black_image').hide();

    });
//    $('.arrow').click(dynamic_nav);
//    $('nav').click(dynamic_nav);
//    $('.expanded').focus(function() {
//
//    });

//    $(function() {
//        $(".arrow").hover(
//            function() { $("nav").slideToggle(800); },
//            function() { $("nav").show(); }
//        );
//    });

    $("nav").hover(
        function () {
            $('.top_list').slideDown('medium');
            $('.nav_text').addClass('nav_text_wide');
            var _width = $('nav').width();
           $('.nav_image img').width(_width);
        },
        function () {
            $('.top_list').stop();
            $('.top_list').slideUp('medium');
            $('.nav_text').removeClass('nav_text_wide');
        }
    );


//    $('.topMenuC > .menu > .li_menu_title > a.menu_title').mouseenter(function(){
//        var $_this = $(this);
//        $_this.next().css("display","block");
//        $_this.parent().addClass('submenuHover');
//    }).mouseleave(function(){
//            var $_this = $(this);
//            $_this.next().css("display","none");
//            $_this.parent().removeClass('submenuHover');
//        });


//    $('.expanded').mouseenter(function(){
//        var $_this = $(this);
//        $_this.next('.bottom_list').css("display","block");
//        $_this.addClass('display');
//    }).mouseleave(function(){
//            var $_this = $(this);
////            $_this.next('.bottom_list').css("display","none");
////            $_this.removeClass('display');
//        });



//
//    var elements = $(".story_mode p");
//    var index = 0;
//
//    var doNext = null;
//    doNext = function() {
//        var element = elements.eq(index);
//        // do work
//        if (index < elements.length) {
//            $('.story_mode p').show();
//            index++;
//            setTimeout(doNext, 1000);
//        }


//    $('.story_mode').each(function(i) {
//        $(this).children().delay(1800*i).fadeOut(2000, function() {
//            $(this).fadeIn(2000);
//        });
//    });

//    function animate (elms) {
//        var target = elms[0]
//        if (target) { // guard to ensure still more
//            $(target).children().fadeOut('5000', function() {
//                $(this).fadeIn('5000')
//                // o/` take one down, pass it around,
//                //     98 elements of goop in the list o/`
//                animate(elms.slice(1))
//            }
//            )}
//    }
//    animate($('.story_mode').get());

    $('.story_mode p').hide().each(function (i) {
        $(this).delay(i * 4000).fadeIn();
    });


});
