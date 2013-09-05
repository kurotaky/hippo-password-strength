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
<div id="strengthLevel" class="password_strength pass_state01"></div>
```

### CSS
```css
.password_strength  {
  width: 150px;
  height: 22px;
}

.pass_state01 {
  background-image: url("images/strength_1.gif");
}

.pass_state02 {
  background-image: url("images/strength_2.gif");
}

.pass_state03 {
  background-image: url("images/strength_3.gif");
}

.pass_state04 {
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
// level1: <div id="strengthLevel" class="password_strength pass_state01"><div>
// level2: <div id="strengthLevel" class="password_strength pass_state02"><div>
// ...

$('.password').hippoPasswordStrength({
    indicator_prefix: "pass_state0"
});
```

## Thanks to…

* [@kihaco](http://github.com/kihaco)
* [@gyugyu](http://github.com/gyugyu)
* [@kitak](http://github.com/kitak)
* [@f-kubotar](https://github.com/f-kubotar)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

This plugin is available under [the MIT license](http://opensource.org/licenses/MIT).
