$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
      
      // Form data
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        orderNumber: $('#orderNumber').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
      };
      
      // Send the form data to the server
      $.ajax({
        url: '/send-message',
        method: 'POST',
        data: formData,
        success: function(response) {
          $('#responseMessage').html('<div class="alert alert-success">' + response.message + '</div>');
          $('#contactForm')[0].reset(); // Reset the form
        },
        error: function(xhr, status, error) {
          $('#responseMessage').html('<div class="alert alert-danger">Something went wrong. Please try again later.</div>');
        }
      });
    });
  });