(function () {
    var auth = function () {
        var _that = this;
        this.settings = {
            degug: true,
            selectors: {
                login: '#login',
                error_id: '#error_disp'
            },
            classes: {}
        };

        this.init = function (settings) {
            var _selectors = _that.settings.selectors;
            this.main.auth_sendForm();
        };

        this.main = {
            auth_sendForm: function (form_name, post, href) {
                $(document.forms[form_name]).on('submit', function () {
                    var form = $(this);
                    $('.error', form).html('');
                    $.ajax({
                        url: post,
                        method: "POST",
                        data: form.serialize(),
                        complete: function () {
                        },
                        statusCode: {
                            200: function () {
                                window.location.href = href;
                            },
                            403: function (jqXHR) {
                                //var error = JSON.parse(jqXHR.responseText);
                                var error = jqXHR.responseText;
                                _that.main.error_disp(error);
                                //$('.error', form).html(error.message);
                            }
                        }
                    });
                    return false;
                });
            },
            error_disp: function (error_message) {
                $(_that.settings.selectors.error_id).show();
                $(_that.settings.selectors.error_id + ' p').text(error_message);
            }
        }
    };
    window.auth = new auth();
}());


$(document).ready(function () {
    auth.init({debug: true});

    if ($('#login').length > 0) {
        auth.main.auth_sendForm('login_form', '/login', '/services');
    }
    if ($('#registration').length > 0) {
        auth.main.auth_sendForm('registration_form', '/registration', '/services');
    }

});