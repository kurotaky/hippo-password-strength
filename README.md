jquery.hippo-password-strength.js
===============================

hippo password strength checker.

## Demo
<p>
  <input id="password" type="password" size="30" name="params[password]" value="" />
</p>
<img id="strengthLevel" src="images/strength_1.gif">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://raw.github.com/kurotaky/hippo-password-strength/master/jquery.hippo-password-strength.js"></script>
<script>
$('#password').hippoPasswordStrength();
</script>

## Example Usage
### HTML

```html
<p>
  <input id="password" type="password" size="30" name="params[password]" value="" />
</p>
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

* [@kihaco](http://github.com/kihaco)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
