$(document).ready(function() {
  $("body").on("click", "li", function() {
    var myClass = $(this).attr("id");
    if ($("ul." + myClass).hasClass("hidden")) {
      $("ul." + myClass).removeClass("hidden");
    } else {
      $("ul." + myClass).addClass("hidden");
    }
  });
});
