console.log('client.js is running');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is running');
}

$.ajax({
    method: 'GET',
    url: '/records'
}).then(function (response) {
    $('body').append('<div id="records"></div>');
    $('#records').append('<h2>Record Collection</h2>')
    for (let record of response) {
        let title = record.title;
        let year = record.year;
        let artist = record.artist;
        let cost = `$${record.cost.toFixed(2).toLocaleString()}`;
        $('#records').append(`<p>"${title}" (${year}) - by ${artist}: ${cost}</p>`);
    }
});