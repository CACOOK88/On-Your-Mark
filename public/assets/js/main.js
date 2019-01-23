// JS TO GRAB FORM VALUES AND SEND TO API ROUTES

$(document).on("click", "button.submit", createNewRace);

function createNewRace(event) {
    event.preventDefault();
    var newRace = {
        firstName: $('#firstName').val().trim(),
        lastName: $('#lastName').val().trim(),
        raceName: $('#raceName').val().trim(),
        category: $('#category').val().trim(),
        street: $('#street').val().trim(),
        city: $('#city').val().trim(),
        state: $('#state').val().trim(),
        zip: $('#zip').val().trim(),
        phone: $('#phone').val().trim(),
        email: $('#email').val().trim(),
        url: $('#url').val().trim(),
        raceLength: $('#raceLength').val().trim(),
        description: $('#description').val().trim(),
        participantCap: $('#participantCap').val().trim(),
    };

    $.post("/api/races", newRace);
}