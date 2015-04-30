(function() {
  $.fn.extend({
    clickable: function() {
      return this.click(function(e) {
        var $target, link;
        $target = void 0;
        link = void 0;
        $target = $(e.target);
        link = $target.parentsUntil('.clickable', '.btn, .btn-group, a').length;
        if (!link) {
          return window.location = $(this).attr('data-href');
        }
      });
    }
  });

  $(function() {
    $('a[href="#fakelink"]').click(function(e) {
      return e.preventDefault();
    });
    
    $('a.droplink').click(function(e) {
      var $drop, $link;
      $link = $(e.currentTarget);
      $drop = $link.siblings('.dropdown');
      if ($link.is('.active') || $drop.is('.active')) {
        $link.removeClass('active');
        $drop.removeClass('active');
      } else {
        $link.addClass('active');
        $drop.addClass('active');
      }
      return false;
    });
    
    $('.slidelink').click(function(e) {
      var $icon, $link, $slide;
      $link = $(e.currentTarget);
      $slide = $link.siblings('.slidedown');
      $icon = $link.find('.icon');
      if ($link.is('.active') || $slide.is('.active')) {
        $link.removeClass('active');
        $slide.removeClass('active');
      } else {
        $link.addClass('active');
        $slide.addClass('active');
      }
      $icon.toggleClass('icon-chevron-right icon-chevron-down');
      return false;
    });
    
    document.body.className += ' animate';

    $('.search-form .btn.search').click(function(e) {
      var q;
      q = $('#q').val();
      return $('#searchtext').val(q);
    });    
    
    $('li.clickable').clickable();

    $(".dropdown-form").each(function(e) {
      var $form, $toggle_btn;
      $form = $(this);
      $form.click(function(e) {
        return e.stopPropagation();
      });
      $form.find('.btn-group[data-toggle="buttons"] > .btn').click(function(e) {
        $(this).button('toggle');
        return e.stopPropagation();
      });
      $toggle_btn = $form.parent();
      return $toggle_btn.on('shown.bs.dropdown', function(e) {
        var $container, offset;
        $container = $(this).parent();
        offset = $container.offset();
        $form.offset({
          left: offset.left
        });
        return $form.css('width', $container.outerWidth());
      });
    });

    $('fieldset.search input').on('focus blur', function(e) {
      $('#popup-search').toggleClass('active')
    });
    // .keyup(function() { 
    //   $('#popup-search').removeClass('active')
    // })

    /* New scripts */

    resize();
    $(window).resize(function() {
      resize();
    });

    $('#update-orders').click(function() { 
      $('a[href="#orders"]').click();
    });
  });

}).call(this);

function resize() {
  width = $(window).width();
  if (width < 768)
    $('body.account .account-profile').removeClass('fill-white').addClass('fill-denim dark');
  else if (width > 767)
    $('body.account .account-profile').addClass('fill-white').removeClass('fill-denim dark');      
}
