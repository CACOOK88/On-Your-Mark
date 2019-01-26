// JS TO GRAB FORM VALUES AND SEND TO API ROUTES

$(document).on("click", ".submit", createNewRace);

function createNewRace(event) {
    event.preventDefault();
    console.log(`you clicked submit`)
    var newRace = {
        firstName: $('#firstName').val().trim(),
        lastName: $('#lastName').val().trim(),
        raceName: $('#raceName').val().trim(),
        category: $('#category').val().trim(),
        street: $('#street').val().trim(),
        city: $('#city').val().trim(),
        state: $('#state').val(),
        zip: $('#zip').val().trim(),
        phoneNumber: $('#phoneNumber').val().trim(),
        email: $('#email').val().trim(),
        url: $('#url').val().trim(),
        raceLength: $('#raceLength').val().trim(),
        description: $('#description').val().trim(),
        participantCap: $('#participantCap').val().trim(),
        date: $('#date').val().trim()
    };
    console.log(newRace)
    console.log(typeof newRace.phoneNumber)

    $.post("/api/races", newRace, function(data) {
        console.log(`back in main.js`)
        console.log(data)
    });

    // CLEAR ALL INPUT FIELDS AFTER SUBMISSION
    $('#firstName').val('')
    $('#lastName').val('')
    $('#raceName').val('')
    $('#category').val('')
    $('#street').val('')
    $('#city').val('')
    $('#state').val('')
    $('#zip').val('')
    $('#phoneNumber').val('')
    $('#email').val('')
    $('#url').val('')
    $('#raceLength').val('')
    $('#description').val('')
    $('#participantCap').val('')
    $('#date').val('')
}