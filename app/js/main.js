$(document).ready(function() {
    $(".toggle-password").click(function() {
          var input = $($(this).attr("toggle"));
          if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).html("<i class='fas fa-eye-slash'></i>");
          } else {
            input.attr("type", "password");
            $(this).html("<i class='fas fa-eye'></i>");
          }
    });
});
 