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

    // Unordered List
    $('#records').append('<h3>List</h3>');
    $('#records').append('<ul></ul>');
    for (let record of response) {
        let title = record.title;
        let year = record.year;
        let artist = record.artist;
        let cost = record.cost.toLocaleString('en', {style: 'currency', currency: 'USD'});
        $('ul').append(`<li>"${title}" (${year}) - by ${artist}: ${cost}</li>`);
    }
    
    // Table
    $('#records').append('<h3>Table</h3>');
    $('#records').append('<table><thead><tr><th>Title</th><th>Artist</th><th>Year</th><th>Cost</th></tr></thead><tbody></tbody></table>');

    response.forEach(function(record) {
        let title = record.title;
        let year = record.year;
        let artist = record.artist;
        let cost = `$${record.cost.toFixed(2).toLocaleString()}`;
        $('tbody').append(`<tr><td>${title}</td><td>${artist}</td><td>${year}</td><td>${cost}</td></tr>`);
    });
});