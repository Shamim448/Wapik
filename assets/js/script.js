//Scroll window change manu color
$(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
    $("nav").addClass("sticky");
    $(".container").addClass("border-hide");
  } else {
    $("nav").removeClass("sticky");
    $(".container").removeClass("border-hide");
  }
});


