// JS FOR ALL RACES HTML PAGE, TABLE FILTERS WILL GO HERE IF WE GET TO IT
// WAIT FOR HTML LOAD BEFORE PERFORMING ANY JS
$(document).ready(function() {
  // GET ALL RACES WHEN PAGE LOADS
  getAllRaces()

  // LISTENER TO CHECK IF USER CHANGES DROP DOWN FILTER
  $('#category').change(function() {
    // IF USER CHANGES FILTER, RUN CORRESPONDING FUNCTION
    if ( $(this).val() == 'all' ) {
      getAllRaces()
    } else if ( $(this).val() == 'run' ) {
      getRunRaces()
    } else if ( $(this).val() == 'bike' ) {
      getBikeRaces()
    } else if ( $(this).val() == 'obstacle' ) {
      getObstacleRaces()
    }
  })  

  function getAllRaces() {
    console.log(`you clicked get all races`)
    $.get('/api/races', function(data) {
      // CLEAR TABLE OF CURRENT DATA
      clearCards()
      console.log(data)
      // TAKE DATA AND RENDER ROWS OF INFORMATION
      createRaceCards(data)
    })
  }

  function getRunRaces() {
    console.log(`you clicked get run races`)
    $.get('/api/races/run', function(data) {
      // CLEAR TABLE OF CURRENT DATA
      clearCards()
      // TAKE DATA AND RENDER ROWS
      createRaceCards(data)
    })
  }

  function getBikeRaces() {
    console.log(`you clicked get bike races`)
    $.get('/api/races/bike', function(data) {
      // CLEAR TABLE OF CURRENT DATA
      clearCards()
      // TAKE DATA AND RENDER ROWS
      createRaceCards(data)
    })
  }

  function getObstacleRaces() {
    console.log(`you clicked get obstacle races`)
    $.get('/api/races/obstacle', function(data) {
      // CLEAR TABLE OF CURRENT DATA
      clearCards()
      // TAKE DATA AND RENDER ROWS
      createRaceCards(data)
    })
  }

  // FUNCTION TO DYNAMICALLY INSERT THE HTML FOR RACE CARDS
  function createRaceCards(data) {
    if (data.length < 1) {
      let noResults = `<h1>Oops! Looks like there are no races here</h1>`
      $('.card-deck').append(noResults)
    } else {
      // LOOP THROUGH DATA AND RENDER HTML
      for ( let i = 0; i < data.length; i++ ) {
        let name = data[i].raceName
        let date = data[i].date
        let address = data[i].street + "<br>" + data[i].city + ", " + data[i].state + " " + data[i].zip
        let raceType = data[i].category
        let card = '<div class="card race-card">'
        card += '<img class="card-img-top d-block" src="../assets/img/onyourmarklogo_coral.svg" alt="Cupid">'
        card += '<div class="card-body">'
        card += '<h5 class="card-title text-center">' + name + '</h5>'
        card += '<p class="card-text">'
        card += '<p class="text-center" id="date">' + date + '</p>'
        card += '<p class="text-center" id="address">' + address + '</p>'
        card += '</p>'
        card += '</div>'
        card += '<div class="card-footer">'
        card += '<p class="text-center"><small class="text-muted">' + raceType + ' event</small></p>'
        card += '</div>'
        card += '</div>'
        $('.card-deck').append(card)
      }
    }
  }

  function clearCards() {
    $('.card-deck').empty()
  }

  // *******************************************************
  //                CAROUSEL JAVASCRIPT
  // *******************************************************
  // CAROUSEL CODE
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