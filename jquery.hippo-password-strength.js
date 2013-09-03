(function($){
    $.fn.hippoPasswordStrength = function(options) {
        options = options || {};

        return this.each(function() {
            $(this).bind('keyup focusout', function() {
                var indicator_path = !!options.indicator_path ?
                                       options.indicator_path : "images/";
                var indicator_prefix = !!options.indicator_prefix ?
                                         options.indicator_prefix : "password_strength";
                var indicator_ext = !!options.indicator_ext ?
                                      options.indicator_ext : "gif";
                var password = $(this).val();
                var strengthLevel = getStrengthLevel(password);

                var $indicator = null;
                if (doesGetDataAttributes()) {
                    $indicator = $("#" + $(this).data("indicator"));
                } else {
                    $indicator = $("#" + $(this).attr("data-indicator"));
                }
                for (var i=1; i < 5; i++) {
                    $indicator.attr("src", indicator_path + indicator_prefix + String(i) + '.' + indicator_ext);
                }
                $indicator.attr("src", indicator_path + indicator_prefix + String(strengthLevel) + '.' + indicator_ext);
            });
        });

        function doesGetDataAttributes() {
            var splitted_version = $().jquery.split(".");
            if (+splitted_version[0] > 1) {
                return true;
            }
            if (splitted_version[0] == 1 && +splitted_version[1] >= 5) {
                return true;
            }
            if (splitted_version[0] == 1 && +splitted_version[1] >= 4 && +splitted_version[2] >= 3) {
                return true;
            }
            return false;
        }

        function getStrengthLevel(password) {
            var strengthLevel = 1;

            if (password.length < 6) {
                strengthLevel = 1;
            }
            if (password.length >= 6 && password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/)) {
                strengthLevel = 2;
            }
            if (password.length >= 8 && password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/)) {
                strengthLevel = 3;
            }
            if (password.length >= 12 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)) {
                strengthLevel = 4;
            }
            if (password.match(/^(.)\1+$/)) {
                strengthLevel = 1;
            }
            return strengthLevel;
        }
    };
})(jQuery);
