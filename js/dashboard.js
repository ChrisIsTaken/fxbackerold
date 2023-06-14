$(document).ready(function() {
    $("#add-session-button").click(function() {
        $("#new-session-form").show();
    });

    $("#new-account-button").click(function() {
        $("#new-account-form").show();
    });

    $("#new-session-form form").submit(function(event) {
        event.preventDefault();
        // Collect the form data
        // Send the form data to the server
    });

    $("#new-account-form form").submit(function(event) {
        event.preventDefault();
        // Collect the form data
        // Send the form data to the server
    });
});
