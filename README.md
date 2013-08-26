jquery.hippo-password-strength.js
===============================

hippo password strength checker.

## Demo
[Demo page is here.](http://kuro96.heteml.jp/hippo-password-strength/hippo.html)

## Installation
```html
<script src="/path/to/jquery.hippo-password-strength.js"></script>
```

## Example Usage
### HTML

```html
<input class="password" type="password" size="30" name="params[password]" value="" data-indicator="strengthLevel">
<img id="strengthLevel" class="indicator_strength1">
```

### CSS
```css
.indicator_strength1 {
  width: 150px;
  height: 22px;
  background-image: url("images/strength_1.gif");
}

.indicator_strength2 {
  width: 150px;
  height: 22px;
  background-image: url("images/strength_2.gif");
}

.indicator_strength3 {
  width: 150px;
  height: 22px;
  background-image: url("images/strength_3.gif");
}

.indicator_strength4 {
  width: 150px;
  height: 22px;
  background-image: url("images/strength_4.gif");
}
```

### jQuery

Use the plugin as follows:

```js
$('.password').hippoPasswordStrength();

// Custom indicator prefix
//
// For example
// level1: <img id="strengthLevel" class="pass_state01">
// level2: <img id="strengthLevel" class="pass_state02">
// ...
$('.password').hippoPasswordStrength({
    indicator_prefix: "pass_state0"
});
```

## Thanks to…

* [@kihaco](http://github.com/kihaco) creating hippo images
* [@gyugyu](http://github.com/gyugyu) adapt to class-based DOM

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

This plugin is available under [the MIT license](http://opensource.org/licenses/MIT).
