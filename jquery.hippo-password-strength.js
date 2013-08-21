(function($){
    $.fn.hippoPasswordStrength = function() {
        return this.each(function() {
            $(this).bind('keyup focusout', function() {
                var password = $(this).val();
                var strengthLevel = getStrengthLevel(password);
                $("#" + $(this).data("indicator")).attr("src","images/strength_" + strengthLevel + ".gif");
            });
        });

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
