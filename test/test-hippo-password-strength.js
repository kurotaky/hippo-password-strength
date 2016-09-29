var jsdom = require('jsdom');
global.document = jsdom.jsdom('<input class="password" type="password" size="30" name="params[password]" value="" data-indicator="strengthLevel"><div id="strengthLevel" class="password_strength pass_state01"></div>');
global.window = document.defaultView;
var $ = jQuery = require('jquery');
var chai = require('chai');
var expect = chai.expect;

require('../jquery.hippo-password-strength.js');

describe('.hippoPasswordStrength()', function() {
  before(function() {
    $('.password').hippoPasswordStrength({
      indicator_prefix: "pass_state0"
    });
  });

  describe('less than 6 characters', function() {
    it('shoud be changed to pass_state01', function() {
      $('.password').focus();
      $('.password').val('passw');
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state01')).to.be.true;
    });
  });

  describe('6 characters (numbers and characters)', function() {
    it('shoud be changed to pass_state02', function() {
      $('.password').focus();
      $('.password').val('passw0');
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state02')).to.be.true;
    });
  });

  describe('8 characters (numbers and characters)', function() {
    it('shoud be changed to pass_state03', function() {
      $('.password').focus();
      $('.password').val('passw0rd');
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state03')).to.be.true;
    });
  });

  describe('12 characters (numbers and uppercase characters)', function() {
    it('shoud be changed to pass_state04', function() {
      $('.password').focus();
      $('.password').val('passw0rdAABB');
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state04')).to.be.true;
    });
  });
});
