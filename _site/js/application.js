$(function (){

  function toggle_header_opacity() {
    if ($(window).scrollTop() > 0) {
      $('#hd').stop(true, true).animate({opacity: 0.75}, 2000);}
    else {
      $('#hd').stop(true, true).animate({opacity: 1}, 2000);}}

  toggle_header_opacity();

  $(window).scroll(function(){ toggle_header_opacity(); });

  $('#hd')
    .hover(
      function(){$(this).stop(true, true).css({opacity: 1}); },
      function(){toggle_header_opacity(); })

  $('.email').wrap(function() {
    if ($(this).hasClass('recipient')) {
      var recipient = $(this).attr('class').match(/to_[^\s'"]*/)[0].replace('to_', '');}
    else {
      var recipient = $(this).text();}
    return '<a rel="nofollow" href="mailto:' + recipient.split('').reverse().join('') + '?subject=Re: ' + document.title + '">';});

});
