console.log('client.js is running');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is running');
    $('#submit-record').on('click', addNewRecord);
}

$.ajax({
    method: 'GET',
    url: '/records'
}).then(function (response) {
    $('body').append('<div id="records"></div>');

    // Unordered List
    for (let record of response) {
        let title = record.title;
        let year = record.year;
        let artist = record.artist;
        let cost = record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' });
        $('ul').append(`<li>"${title}" (${year}) - by ${artist}: ${cost}</li>`);
    }

    // Table
    response.forEach(function (record) {
        let title = record.title;
        let year = record.year;
        let artist = record.artist;
        let cost = `$${record.cost.toFixed(2).toLocaleString()}`;
        $('tbody').append(`<tr><td>${title}</td><td>${artist}</td><td>${year}</td><td>${cost}</td></tr>`);
    });
});

function addNewRecord() {
    const newRecord = {
        title: $('#title').val(),
        year: Number($('#year').val()),
        artist: $('#artist').val(),
        cost: Number($('#cost').val())
    }
    console.log('New song object', newRecord);
    $.ajax({
        method: 'POST',
        url: '/add-record',
        data: newRecord
    }).then(function (response) {
        console.log(response);
    });
}