$(document).ready(function() {
    // Placeholder data
    var sessions = [
        {symbol: 'AAPL', startDate: '2023-01-01', accounts: ['Account 1'], name: 'Session 1', strategy: 'Strategy 1', description: 'Description 1'},
        {symbol: 'GOOG', startDate: '2023-01-01', accounts: ['Account 2'], name: 'Session 2', strategy: 'Strategy 2', description: 'Description 2'}
    ];
    var accounts = [
        {name: 'Account 1', balance: 10000},
        {name: 'Account 2', balance: 20000}
    ];

    // Add sessions to the session list
    for (var i = 0; i < sessions.length; i++) {
        var session = sessions[i];
        $("#session-list").append('<p>' + session.symbol + ': ' + session.startDate + ' <button class="view-details-button" data-index="' + i + '">View Details</button></p>');
    }

    // Add accounts to the account list
    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        $("#account-list").append('<p>' + account.name + ': ' + account.balance + '</p>');
    }

    $("#add-session-button").click(function() {
        $("#new-session-modal").dialog({
            modal: true,
            buttons: {
                "Create": function() {
                    // Collect the form data
                    var newSession = {
                        symbol: $(this).find('select[name="symbol"]').val(),
                        startDate: $(this).find('input[name="start-date"]').val(),
                        accounts: $(this).find('input[name="accounts"]:checked').map(function() { return this.value; }).get(),
                        name: $(this).find('input[name="name"]').val(),
                        strategy: $(this).find('input[name="strategy"]').val(),
                        description: $(this).find('textarea[name="description"]').val()
                    };
                    // Send the form data to the server
                    // Add the new session to the session list
                    sessions.push(newSession);
                    $("#session-list").append('<p>' + newSession.symbol + ': ' + newSession.startDate + ' <button class="view-details-button" data-index="' + (sessions.length - 1) + '">View Details</button></p>');
                    // Close the dialog
                    $(this).dialog("close");
                },
                Cancel: function() {
                    $(this).dialog("close");
                }
            }
        });
    });

    $("#add-account-button").click(function() {
        $("#new-account-modal").dialog({
            modal: true,
            buttons: {
                "Create": function() {
                    // Collect the form data
                    var newAccount = {
                        name: $(this).find('input[name="account-name"]').val(),
                        balance: $(this).find('input[name="initial-balance"]').val()
                    };
                    // Send the form data to the server
                    // Add the new account to the account list
                    accounts.push(newAccount);
                    $("#account-list").append('<p>' + newAccount.name + ': ' + newAccount.balance + '</p>');
                    // Close the dialog
                    $(this).dialog("close");
                },
                Cancel: function() {
                    $(this).dialog("close");
                }
            }
        });
    });
});