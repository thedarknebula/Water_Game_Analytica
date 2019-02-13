function getEvents() {
    return fetch('http://134.209.15.99/api/v1/events')
        .then(function(response) {
            return response.json();
        })
}

function getOPRs(event) {
    return fetch('http://134.209.15.99/api/v1/oprs/' + event.event_key)
        .then(function(response) {
            return response.json();
        })
}
