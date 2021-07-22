/* Tabs in Skills */

$(".skill-type").on("click", function () {
  let currTab = $(this).parent().index();

  // Add css to text
  $(".skill-type").removeClass("filter-active");
  $(this).addClass("filter-active");

  // Add css to skills list
  $(".skill-list").removeClass("skill-active");
  $(".skill-list").eq(currTab).addClass("skill-active");
});
