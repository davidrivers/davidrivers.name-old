$(function (){
  $('.email').wrap(function() {
    if ($(this).hasClass('recipient')) {
      var recipient = $(this).attr('class').match(/to_[^\s'"]*/)[0].replace('to_', '');
    } else {
      var recipient = $(this).text();
    }
    return '<a rel="nofollow" href="mailto:' + recipient.split('').reverse().join('') + '?subject=Re: ' + document.title + '">';
  });
});
