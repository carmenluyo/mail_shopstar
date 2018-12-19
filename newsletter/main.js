
$(window).on('load resize', function(){
  var $window = $(window);
  $('.modal-fill-vert .modal-body > *').height(function(){
      return $window.height()-60;
  });
});