// Activate Carousel
$("#vanGoghCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#vanGoghCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
  $("#vanGoghCarousel").carousel("prev");
});

