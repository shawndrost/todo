          $('form').submit(function(){
            if ($('input').val() !== '') {
              var input_value = $('input').val();
              $('ul').append('<li><a href=#>x</a>' + input_value + '</li>');
            };
              $('input').val(''); // clears text input after submit!
              return false;
              // prevent default
          });
          
            $(document).on('click', 'a', function (e) {
              e.preventDefault(); // same as 'return false'?
              $(this).parent().remove();
            });
