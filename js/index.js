$(document).ready(function() {
     $(".program-desc").fadeOut(0);
     $(".program").click(function() {
          $(".program-desc").not($(this).next()).slideUp('fast');
          $(this).next().slideToggle(400);
     });
});