$(function () {
  $("#services").click(function() {
    $("html, body").animate({ scrollTop: $("header").height() }, "slow");
    return false;
  });
  $("#story").click(function() {
    $("html, body").animate({ scrollTop: $(".stor-sec").offset().top }, "slow");
    return false;
  });
  $("#work").click(function() {
    $("html, body").animate({ scrollTop: $(".rece-sec").offset().top }, "slow");
    return false;
  });
  $("#journal").click(function() {
    $("html, body").animate({ scrollTop: $(".sub-sec").offset().top }, "slow");
    return false;
  });
  $("#contact").click(function() {
    $("html, body").animate({ scrollTop: $(".soc-sec").offset().top }, "slow");
    return false;
  });

$(".serv-item").animated("fadeInRight");

});
