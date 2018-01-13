$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = 'views/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})