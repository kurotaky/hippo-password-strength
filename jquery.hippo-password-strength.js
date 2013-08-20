(function($){
    $.fn.hippoPasswordStrength = function() {
        this.bind('keyup focusout', function() {
            var password = $(this).val();
            passwordStrengthCheck(password);
        });

        function passwordStrengthCheck(password) {
            var strengthLevel = getStrengthLevel(password);
            $("#strengthLevel").attr("src","/images/strength_" + stregnthLevel + ".gif");
        }

        function getStrengthLevel(password) {
            var strengthLevel = 0;

            if (password.length < 6) {
                strengthLevel = 1;
            }
            if (password.length >= 6) {
                strengthLevel = 2;
            }
            if (password.length >= 8 && password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/)) {
                strengthLevel = 3;
            }
            if (password.length >= 12 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)) {
                strengthLevel = 4;
            }
            return strengthLevel;
        }
    };
})(jQuery);
