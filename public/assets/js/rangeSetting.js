$(document).ready(function () {
  var slider3 = document.getElementById("slider3");
  noUiSlider.create(slider3, {
    start: 50,
    connect: "lower",
    range: {
      min: 0,
      max: 100,
    },
  });
});
