const fs = require('fs');

exports.saveArtists = (artists) => {
    fs.writeFileSync('./artists.json', JSON.stringify(artists));
    console.log(artists);
}

exports.savePeople = (people) => {
    fs.writeFileSync('./people.json', JSON.stringify(people));
    console.log(people);
}

exports.loadArtists = () => {
    return JSON.parse(fs.readFileSync('./artists.json', 'utf8'));
}

exports.loadPeople = () => {
    return JSON.parse(fs.readFileSync('./people.json', 'utf8'));
}