// JS FOR ALL RACES HTML PAGE, TABLE FILTERS WILL GO HERE IF WE GET TO IT

$(document).ready(function() {

  getAllRaces()

  $(document).on('click', '.runFilter', getRunRaces)
  $(document).on('click', '.bikeFilter', getBikeRaces)
  $(document).on('click', '.obstacleFilter', getObstacleRaces)
  $(document).on('click', '.allRaces', getAllRaces)


  function getAllRaces() {
    $.get('/api/races', function(data) {

      console.log(data)
      // TAKE DATA AND RENDER ROWS OF INFORMATION
    })
  }

  function getRunRaces() {
    $.get('/api/races/run', function(data) {
      // CLEAR TABLE OF CURRENT DATA


      console.log(data)
      // TAKE DATA AND RENDER ROWS
    })
  }

  function getBikeRaces() {
    $.get('/api/races/bike', function(data) {
      // CLEAR TABLE OF CURRENT DATA

      
      console.log(data)
      // TAKE DATA AND RENDER ROWS
    })
  }

  function getObstacleRaces() {
    $.get('/api/races/obstacle', function(data) {
      // CLEAR TABLE OF CURRENT DATA

      
      console.log(data)
      // TAKE DATA AND RENDER ROWS
    })
  }

})