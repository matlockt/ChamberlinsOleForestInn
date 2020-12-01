// VALIDATION

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='booknowform']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      checkin: "required",
      checkout: "required",
      name: "required",
      phone: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
    },
    // Specify validation error messages
    messages: {
      checkin: "Please provide check in date.",
      checkout: "Please provide check out date.",
      name: "Please provide first and last name.",
      phone: "Please provide phone number",
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});


// DATE PICKER: BOOK ONLY IN FUTURE, CHECK OUT DATE AFTER CHECK IN DATE
$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#checkin" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          showOtherMonths: true,
          selectOtherMonths: true,
          minDate: 0
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#checkout" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        showOtherMonths: true,
      selectOtherMonths: true
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  } );
