(function () {
    var shmsh = function () {
        var _that = this;
        this.settings = {

            degug: true,
            selectors: {
                placeholder: 'input[placeholder]',
                search_button: '.search_btn',
                message: '.message',
                eban: '#eban',
                search_form: '.search_form',
                fuck: '.fuck',
                here: '.here',
                nav_outside: '#outside',
                top_list: '.top_list',
                nav_text: '.nav_text',
                login: '#login',
                clopener: '.clopener',
                nav_inside: '#inside',
                services: '#services'

            },
            classes: {
                nav_text_wide: 'nav_text_wide',
                hidden: 'hidden',
                clops: 'clopener_pos',
                clopener_ser: 'clopener_ser'
            }

        };

        this.init = function (settings) {
            var _selectors = _that.settings.selectors;
            //this.main.placeholder(_selectors.placeholder);
            //this.main.search_shit();
            this.main.nav_hover();
            this.main.clopener();
            //this.main.createWidget();
            //this.main.next();
            //this.main.prev();
        };

        this.main = {
            placeholder: function (placeholder) {
                var $placeholder = $(placeholder);
                if ($placeholder.length > 0) {
                    var attrPh = $placeholder.attr('placeholder');
                    $placeholder.attr('value', attrPh)
                        .bind('focus', function () {
                            var $this = $(this);
                            if ($this.val() === attrPh)
                                $this.val('').css('color', '#fff');
                        }).bind('blur', function () {
                            var $this = $(this);
                            if ($this.val() === '')
                                $this.val(attrPh).css('color', '#fff');
                        });

                }
            },
            search_shit: function () {
                var _selectors = _that.settings.selectors,
                    search_btn = $(_selectors.search_button),
                    message = $(_selectors.message),
                    eban = $(_selectors.eban),
                    search_form = $(_selectors.search_form),
                    fuck = $(_selectors.fuck),
                    here = $(_selectors.here);

                search_btn.attr("disabled", true);
                message.show().delay(5000).fadeOut();

                eban.stop().animate({
                    top: 0
                }, 1500, 'easeOutBounce').delay(5000).animate({
                    top: -500
                }, 1500, 'easeOutBounce');

                search_form.stop().delay(6000).animate({
                    left: -9999
                }, 1500, 'easeOutBounce');
                setTimeout(function () {
                    fuck.fadeIn(500);
                }, 8000);
                setTimeout(function () {
                    here.fadeIn(500);
                }, 10000);

            },
            nav_hover: function () {
                var _selectors = _that.settings.selectors,
                    nav = $(_selectors.nav_outside),
                    top_list = $(_selectors.top_list),
                    nav_text = $(_selectors.nav_text),
                    nav_text_wide = _that.settings.classes.nav_text_wide;
                nav.hover(
                    function () {
                        top_list.slideDown('medium');
                        nav_text.addClass(nav_text_wide);
                        var _width = nav.width();
                        $('.nav_image img').width(_width);
                    },
                    function () {
                        top_list.stop();
                        top_list.slideUp('medium');
                        nav_text.removeClass(nav_text_wide);
                    }
                );
            },
            clopener: function () {
                var _selectors = _that.settings.selectors,
                    _classes = _that.settings.classes,
                    nav = $(_selectors.nav_inside),
                    clopener = $(_selectors.clopener),
                    hidden = _classes.hidden,
                    clops = _classes.clops,
                    services= $(_selectors.services),
                    clopener_ser = _classes.clopener_ser;
                clopener.on("click", function () {
                    if (nav.hasClass(hidden)) {
                        nav.removeClass(hidden);
                        clopener.removeClass(clops);
                        services.removeClass(clopener_ser);
                    }
                    else {
                        nav.addClass(hidden);
                        clopener.addClass(clops);
                        services.addClass(clopener_ser);
                    }
                });
            },
            send_ajax: function (ajax_data, where) {
                      $.ajax({
                        url: where,
                        method: "POST",
                        data: ajax_data,
                        complete: function () {
                        }
                    });
                    return false;
            }
        }
    };
    window.shmsh = new shmsh();
}());


$(document).ready(function () {
    shmsh.init({debug: true});

    $('.search_btn').on('click', function () {
        shmsh.main.search_shit()
    });
    $('.close').on('click', function () {
        $(this).parent().hide();
    });
    $('.turn_reg button').on('click', function(){
       shmsh.main.send_ajax({ huj:"givi"}, '/reg_onOff');
    });


});

//{ name: "John", location: "Boston" }