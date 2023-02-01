var input = document.getElementById("userInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();

    $('html, body').animate({
      scrollTop: $("#mainContent").offset().top
    }, 500);

  }
});

function returnText() {
  let input = document.getElementById("userInput").value;
  let searchAPI = "https://en.wikipedia.org/api/rest_v1/page/summary/" + input

  console.log(searchAPI);

  $("#searchResults__container").css("display", "block");

  //extracting data from json object which is relevant to the featured article.
  $.getJSON(searchAPI, function (data) {

    console.log(searchAPI.status)
    searchResultsTitle = (data["title"]);
    searchResultsSummary = (data["extract"]);

    if ((data).hasOwnProperty('thumbnail')) {
      searchResultsImage = (data["thumbnail"]["source"]);
    } else {
      searchResultsImage = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
    }

    searchResultsLink = (data["content_urls"]["desktop"]["page"]);

    $("#searchResult__title").text(searchResultsTitle);
    $("#searchResult__summary").text(searchResultsSummary);
    $("#searchResult__image").css('background-image', 'url(' + searchResultsImage + ')');
    $("#searchResult__Link").attr("href", searchResultsLink)
  });





}

function scrollToTop() {
  $('html, body').animate({
    scrollTop: $(".blog-header").offset().top
  }, 1000);
}