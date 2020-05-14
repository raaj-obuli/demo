jQuery(function(){
  $('.toggle').click(function(e) {
      e.preventDefault();

      var $this = $(this);

      if ($this.next().hasClass('show')) {
          $this.parent().removeClass('show');
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('li').removeClass('show');
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('li .inner').slideUp(350);
          $this.parent().toggleClass('show');
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });
});
