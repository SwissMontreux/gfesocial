$(document).ready(function () {
  var slider1 = document.getElementById("slider1");
  var slider2 = document.getElementById("slider2");
  noUiSlider.create(slider1, {
    start: 50,
    connect: "lower",
    range: {
      min: 0,
      max: 100,
    },
  });

  noUiSlider.create(slider2, {
    start: [20, 35],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
});
