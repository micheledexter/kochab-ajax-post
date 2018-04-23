console.log('client.js is running');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is running');
    $('#submit-record').on('click', addNewRecord);
    getRecordList();
}

// Use AJAX to get an object array of records
function getRecordList() {
    $.ajax({
        method: 'GET',
        url: '/record'
    }).then(function (response) {
        $('#records').html('');
        $('body').append('<div id="records"></div>');

        // Build unordered List
        $('ul').empty();
        $('tbody').empty();
        for (let record of response) {
            let title = record.title;
            let year = Number(record.year);
            let artist = record.artist;
            let cost = Number(record.cost).toLocaleString('en', { style: 'currency', currency: 'USD' });
            $('ul').append(`<li>"${title}" (${year}) - by ${artist}: ${cost}</li>`);
        }

        // Build table
        response.forEach(function (record) {
            let title = record.title;
            let year = Number(record.year);
            let artist = record.artist;
            let cost = Number(record.cost).toLocaleString('en', { style: 'currency', currency: 'USD' });
            $('tbody').append(`<tr><td>${title}</td><td>${artist}</td><td>${year}</td><td>${cost}</td></tr>`);
        });
    });
}

// Add a new record to the database
function addNewRecord() {

    // Create the newRecord object
    const newRecord = {
        title: $('#title').val(),
        year: Number($('#year').val()),
        artist: $('#artist').val(),
        cost: Number($('#cost').val())
    }

    // Clear the form
    $('#title').empty();
    $('#year').empty();
    $('#artist').empty();
    $('#cost').empty();

    // Verify that the object worked by console logging it
    console.log('New song object', newRecord);

    // Post object to AJAX
    $.ajax({
        method: 'POST',
        url: '/record/add',
        data: newRecord
    }).then(function (response) {
        console.log(response);
    });
    getRecordList();
}