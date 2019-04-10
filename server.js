/*
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');


var db = mongo.connect('mongodb://localhost:27017',  (err, response) => {
    err ? console.log(err) : console.log('Connected to db');
})


var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
})


var Schema = mongo.Schema;

var Artist = new Schema({
    name: String,
    country: String,
    genre: String

})

var AlbumsSchema = new Schema({
    name: {type: String},
    year: {type: Number},
    price: {type: Number},
    artist: {
        name: String,
        country: String,
        genre: String
    }
});

var Albums = mongo.model('albums', AlbumsSchema, 'albums')

app.get('/api/albums', (req, res) => {
    console.log(albums);
    Albums.find({}, (err, data) => {
       err ? res.send(err) :  res.send(data);
    })
})


app.listen(9999, () => {console.log('Api has been launch !')})

/!*
db.albums.insert({
    name : "A Bigger Bang",
    year : 2005,
    price : 16.50,
    artist :
        {
            name : "Rolling Stones",
            country : "Angleterre",
            genre : "Rock"
        }
})*!/
*/


//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.
var express = require('express');


// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
var mongoose = require('mongoose');
// Ces options sont recommandées par mLab pour une connexion à la base
var options = {};

//URL de notre base
var urlmongo = "mongodb://localhost:27017/music";

// Nous connectons l'API à notre base de données
mongoose.connect(urlmongo, options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});

// Nous créons un objet de type Express.
var app = express();


var Schema = mongoose.Schema;

var AlbumsSchema = new Schema({
    name: {type: String},
    year: {type: Number},
    price: {type: Number},
    picture: {type: String},
    artist: {
        name: String,
        country: String,
        genre: String
    }
});

var ArtistsSchema = new Schema({
    name: {type: String},
    genre: {type: String},
    nationality: {type: String},

});

var Albums = mongoose.model('albums', AlbumsSchema, 'albums')
var Artists = mongoose.model('artists', ArtistsSchema, 'artists')

app.get('/api/albums', (req, res) => {
    Albums.find().sort({year: 1}).exec((err, data) => {
        err ? res.send(err) :  res.send(data);
        console.log(data)
    })
})

app.get('/api/artists', (req, res) => {
    Artists.find({}, (err, data) => {
        err ? res.send(err) :  res.send(data);
    })
})


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
})


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(9999, () => {console.log('Api has been launch !')})

/*

db.artists.insert({
    name: "Rolling Stones",
    genre: "Rock",
    nationality: "Angleterre",
    musicien: [
        {   name: "Keith Richards",
            nationality: "Angleterre",
            Instrument: "Guitare Basse"
        },
        {   name: "Bill Wyman",
            nationality: "Angleterre",
            Instrument: "Guitare Electrique"
        },
        {   name: "Charlie Watts",
            nationality: "Angleterre",
            Instrument: "Batterie"
        }
    ]
})
*/
db.albums.insert({
    name : "Presence",
    year : 1976,
    price : 18.81,
    picture : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Led_Zeppelin_-_Presence.jpg/220px-Led_Zeppelin_-_Presence.jpg",
    artist : {
        name : "Led Zeppelin",
        country : "Angleterre",
        genre : "Heavy Metal"
    }
})

db.albums.update(
    {
        _id: ObjectId("5cae19b276bb26bcd69f3da5")
    },
    {
        $set: {

        }
    } )