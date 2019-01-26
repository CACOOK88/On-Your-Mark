// JS FOR ALL RACES HTML PAGE, TABLE FILTERS WILL GO HERE IF WE GET TO IT

$(document).ready(function() {

  getAllRaces()

  $(document).on('click', '.filterSubmit', getRaces)
  $(document).on('click', '.bikeFilter', getBikeRaces)
  $(document).on('click', '.obstacleFilter', getObstacleRaces)
  $(document).on('click', '.allRaces', getAllRaces)

  function getRaces() {
    let filter = $('#category').val()
    
  }

  function getAllRaces() {
    console.log(`you clicked get all races`)
    $.get('/api/races', function(data) {

      console.log(data)
      // TAKE DATA AND RENDER ROWS OF INFORMATION
    })
  }

  function getRunRaces() {
    console.log(`you clicked get run races`)
    $.get('/api/races/run', function(data) {
      // CLEAR TABLE OF CURRENT DATA


      console.log(data)
      // TAKE DATA AND RENDER ROWS
    })
  }

  function getBikeRaces() {
    console.log(`you clicked get bike races`)
    $.get('/api/races/bike', function(data) {
      // CLEAR TABLE OF CURRENT DATA

      
      console.log(data)
      // TAKE DATA AND RENDER ROWS
    })
  }

  function getObstacleRaces() {
    console.log(`you clicked get obstacle races`)
    $.get('/api/races/obstacle', function(data) {
      // CLEAR TABLE OF CURRENT DATA

      
      console.log(data)
      // TAKE DATA AND RENDER ROWS
    })
  }

  // *******************************************************
  //                CAROUSEL JAVASCRIPT
  // *******************************************************
  var slideIndex = 0;
  carousel();
  function carousel() {
    var i;
    var x = document.getElementsByClassName("sportslide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
  }
})