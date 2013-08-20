jquery.hippo-password-strength.js
===============================

hippo password strength checker.

## Installation
```html
<script src="/path/to/jquery.hippo-password-strength.js"></script>
```

## Example Usage
### HTML

```html
<input id="password" type="password" size="30" name="params[password]" value="">
<img id="strengthLevel" src="images/strength_1.gif">
```

### jQuery

Use the plugin as follows:

```js
$('#password').hippoPasswordStrength();
```

## Notes

* Requires jQuery 1.6+.

## License

This plugin is available under [the MIT license](http://mths.be/mit).

## Thanks to…

* [@kihaco](http://github.com/kihaco) creating hippo images

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
