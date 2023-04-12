jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contact-form').submit(function(e) {
    var form = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    form.children('input').each(function() { // run all inputs
      var input = $(this); // current input
      var rule = input.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (input.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (input.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(input.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!input.attr('checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(input.val())) {
              ferror = ierror = true;
            }
            break;
        }
        // const error_label = input.next('.validation')[0];
        // console.log(error_label);
        input.next('.validation').html((ierror ? (input.attr('data-msg') !== undefined ? input.attr('data-msg') : 'wrong Input') : '')).show();
      }
    });
    form.children('textarea').each(function() { // run all inputs
      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        // const error_label = i.next('.validation')[0];
        // console.log(error_label);
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show();
      }
    });
    if (!ferror) { // if it has no errors then...
      const serviceID = 'service_b16wdlt';
      const templateID = 'template_quxrm0j';
      
      $("div.form").addClass("loading");
      // return false;
      emailjs.sendForm(serviceID, templateID, this).then(() => {
        $("#sendmessage").addClass("show");
        $("div.form").removeClass("loading");
        $("#errormessage").removeClass("show");
        $('.contactForm').find("input, textarea").val("");
        $('button#submit-btn').prop('disabled', true);
      }, (err) => {
        console.error(err);
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html(err);
      });
    }
    return false;
    // else var str = $(this).serialize();
    // $.ajax({
    //   type: "POST",
    //   url: "contactform/contactform.php",
    //   data: str,
    //   success: function(msg) {
    //     // alert(msg);
    //     if (msg == 'OK') {

    //     } else {

    //     }
    //   }
    // });
    
  });

});
