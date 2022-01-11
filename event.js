$(function() {
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });

  $('#change-css').click(function(){
    $('#text3').css('color','red');
    $('#text3').css('font-size','50px');
  });

  $('#change-text').click(function(){
    $('#welcome').text('welcome jquery');
  });

  $('#change-html').click(function(){
    $('#welcome').html('<a href="#">go to jquery</a>');
  });

  $('.list-item').click(function(){
    $(this).css('color','blue');
  });

  $('.btn').click(function() {
    var $title = $('#title');
    
    $title.css('color', 'red');
    $title.html('こんばんは、〇〇さん');
    $title.fadeOut(1000);
    
    $('#text4').css('color','blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
  });
});