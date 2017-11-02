const Person = require('./person');
const Artist = require('./artist');
const Database = require('./database');

const artist = new Artist('Salvador Dali', "painter", 48, 10);
const artist2 = new Artist('Sting', 'singer', 50, 55);
const person = new Person('Havier',10);

console.log(JSON.stringify(artist));
console.log(JSON.stringify(artist2));

artist.doCollaborationWith(artist2);
artist2.doCollaborationWith(artist);
for (var i = 0; i < 3; i++){
artist.makeArt();
}
artist.doCollaborationWith(artist2);
for (var i = 0; i < 5; i++){    
artist.earnMoney();
}

artist.amIRich();

artist.amIPopular();

person.haveABeerWith(artist);

console.log(JSON.stringify(artist));
console.log(JSON.stringify(artist2));

const artists = [artist, artist2];
const people = [person];

Database.saveArtists(artists);
Database.savePeople(people);

const loadedFileArtists = Database.loadArtists();
const loadedFilePeople = Database.loadPeople();

console.log(loadedFileArtists);
console.log(loadedFilePeople);