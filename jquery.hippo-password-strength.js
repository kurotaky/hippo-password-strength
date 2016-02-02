(function($){
    $.fn.hippoPasswordStrength = function(options) {
        options = options || {};

        this.bind('focusout', function() {
            update.call(this);
        });

        return this.each(function(i, elem) {
            $(elem).bind('keyup', (function() {
                var timerId = null;

                return function() {
                    if (timerId !== null) {
                        clearTimeout(timerId);
                    }

                    timerId = setTimeout(function() {
                        update.call(elem);
                        timerId = null;
                    }, 250);
                };
            })());
        });

        function update() {
            var indicator_prefix = !!options.indicator_prefix ?
                options.indicator_prefix : "password_strength";
            var password = $(this).val();
            var strengthLevel = getStrengthLevel(password);

            var $indicator = null;
            if (doesGetDataAttributes()) {
                $indicator = $("#" + $(this).data("indicator"));
            } else {
                $indicator = $("#" + $(this).attr("data-indicator"));
            }
            for (var i=1; i < 5; i++) {
                $indicator.removeClass(indicator_prefix + String(i));
            }
            $indicator.addClass(indicator_prefix + String(strengthLevel));
        }

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

        // Return only one copy of each of the unique characters in the string
        // e.g. "AaaaBbbbA" returns "AaBb"
        function uniqueCharacters(s) {
            var chars = {}, rv = '';

            for (var i = 0; i < s.length; ++i) {
                if (!(s[i] in chars)) {
                    chars[s[i]] = 1;
                    rv += s[i];
                }
            }

            return rv;
        }

        // Count the number of character classes in the string,
        // Uppercase letters, lowercase letters, numbers, and symbols
        function getCharacterClasses(str) {
            var characterClasses = 0;

            // Lowercase
            if (str.match(/[a-z]/)) {
                characterClasses++;
            }
            // Uppercase
            if (str.match(/[A-Z]/)) {
                characterClasses++;
            }
            // Numerals
            if (str.match(/[0-9]/)) {
                characterClasses++;
            }
            // Symbols (anything that isn't lower,upper,numbers)
            if (str.match(/[^a-zA-Z0-9]/)) {
                characterClasses++;
            }

            return characterClasses;
        }

        function getStrengthLevel(password) {
            var strengthLevel = 1;

            console.log(password);
            
            // Anything matching any banned words (e.g. 'password') is immediately rejected
            var banned_words = !!options.banned_words ? options.banned_words : "password";
            banned_words = banned_words.split(/\s/);
            for (w in banned_words) {
                if(password.match(new RegExp(banned_words[w], "gi"))) {
                    console.log(banned_words[w]);
                    return 1;
                }
            }

            // Start by giving a raw score based on length
            if (password.length >= 14) {
                strengthLevel = 4;
            } else if (password.length >= 12) {
                strengthLevel = 3;
            } else if (password.length >= 8) {
                strengthLevel = 2;
            }

            // Count character classes
            characterClasses = getCharacterClasses(password);

            // More character classes gives a bonus; fewer takes away a point
            if (characterClasses == 4) {
                strengthLevel += 2;
            } else if (characterClasses == 3) {
                strengthLevel += 1;
            } else if (characterClasses == 1) {
                strengthLevel -= 1;
            }

            // If the password contains less than 50% unique characters (e.g. "aaaaBBBB#")
            // then it instantly fails
            if (uniqueCharacters(password).length < (password.length / 2)) {
                strengthLevel = 0;
            }

            // Can't have a password stronger than 4, or weaker than 1
            if (strengthLevel > 4) {
                strengthLevel = 4;
            } else if (strengthLevel < 1) {
              strengthLevel = 1;
            }

            console.log(strengthLevel);

            return strengthLevel;
        }

    };
})(jQuery);
