var trendCities = [{
    city: "Boston",
    state: "MA"
  },
  {
    city: "Chicago",
    state: "IL"
  },
  {
    city: "Seattle",
    state: "WA"
  },
  {
    city: "Boulder",
    state: "CO"
  },
  {
    city: "Charlotte",
    state: "NC"
  },
  {
    city: "Cincinnati",
    state: "OH"
  },
  {
    city: "Miami",
    state: "FL"
  },
  {
    city: "Nashville",
    state: "TN"
  },
  {
    city: "Atlanta",
    state: "GA"
  }
];

//function to render city buttons
function showCityBtn() {
  $(".trending-cities").empty();

  for (i = 0; i < trendCities.length; i++) {
    var trendCityBtn = $(
      "<button type='button' class='hollow button trendCityBtn' href='#'>" +
      trendCities[i].city +
      ", " +
      trendCities[i].state +
      "</button>"
    );
    trendCityBtn.attr("data-city", trendCities[i].city);
    trendCityBtn.attr("data-state", trendCities[i].state);
    $(".trending-cities").append(trendCityBtn);
  }
}

//click function to generate new fav city buttons based on user input
$("#submit-button").click(function (event) {
  event.preventDefault();
  var favCitiesSI = [];
  var favCitiesNSI = [];
  var submission = $("#city-input").val();
  console.log(submission);

  //if user is signed-in, print unique search buttons that aren't shown on sign-out
  if (user) {
    //if user is signed-out, print unique search buttons that aren't shown on sign-in
  } else {
    favCitiesNSI.push(submission);
    for (i = 0; i < favCitiesNSI.length; i++) {
      var favCityBtnNSI = $(
        "<button type='button' class='hollow button favBtnNSI' href='#'>" +
        favCitiesNSI[i] +
        ", " +
        $("#state-input").val() +
        "</button>"
      );
      favCityBtnNSI.attr("data-city", submission);
      favCityBtnNSI.attr("data-state", $("#state-input").val());
      var favCityBtnNSI2 = favCityBtnNSI.clone();
      $(".fav-cities-notsi").append(favCityBtnNSI);
      $("#city-buttons-nsi").append(favCityBtnNSI2);
      $("#city-input").empty();
    }
  }
});

showCityBtn();