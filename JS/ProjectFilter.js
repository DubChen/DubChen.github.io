// Script for filtering functionality on projects for home page
// Uses jQuery and Isotope packages


// layout and init Isotope after images load
var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
});

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
