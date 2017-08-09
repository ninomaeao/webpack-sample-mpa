import $ from 'jquery';
import '../css/main.scss';

$(function(){
  var $hello = $('<div>').text("hello").addClass('hello');
  $('body').append($hello)
});