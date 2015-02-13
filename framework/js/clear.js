(function() {
  $(function() {
    $('input[data-toggle="clear"]').each(function(e) {
      $input =  $(this)
      $clear =  $('<i></i>')
                .addClass('icon icon-remove-sign quiet clear')
                .click(function() {
                  $input.val('').focus()
                  $(this).hide()
                });
      $input.after($clear)
      $clear.toggle(Boolean($input.val()))      
      $input.keyup(function() { 
        $clear.toggle(Boolean($input.val())) 
      });
    });
  });
}).call(this);
