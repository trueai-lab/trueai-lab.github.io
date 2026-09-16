$(window).scroll(function () {
if ($(window).width() < 768) {
  $("#navbar a").click(function () {
    $("#navbar").collapse('hide');
  });
    $(window).scroll(function () {
      $("#navbar").collapse('hide');
    });
  }
});