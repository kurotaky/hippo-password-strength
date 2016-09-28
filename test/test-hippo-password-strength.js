//jQuery = require('jquery');

//var chai = require('chai');
var expect = chai.expect;

describe('.hippoPasswordStrength()', function() {
  before(function() {
    $('.password').hippoPasswordStrength({
      indicator_prefix: "pass_state0"
    });
  });

  describe('6 characters (numbers and characters)', function() {
    it('shoud be pass_state02', function() {
      $('.password').val('passw0');
      $('.password').focus();
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state02')).to.be.true;
    });
  });

  describe('8 characters (numbers and characters)', function() {
    it('shoud be pass_state03', function() {
      $('.password').val('passw0rd');
      $('.password').focus();
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state03')).to.be.true;
    });
  });

  describe('12 characters (numbers and characters)', function() {
    it('shoud be pass_state04', function() {
      $('.password').val('passw0rdAABB');
      $('.password').focus();
      $('.password').focusout();
      expect($('#strengthLevel').hasClass('pass_state04')).to.be.true;
    });
  });
});
