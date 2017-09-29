var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');
var twitterKeys = keys.keyData.twitterKeys;
var spotifyKeys = keys.keyData.spotifyKeys;
var commandArr = process.argv.slice(3);
var command = commandArr.join(' ');

//switch statement for liri command

switch(process.argv[2]){
	case 'my-tweets':

		getTweets(command);

		break;
	case 'spotify-this-song':

		getMusic(command);

		break;
	case 'movie-this':
		getMovie(command);

		break;
	case 'do-what-it-says':
		doWhat();
		break;
}

//get tweets function
function getTweets(user){

	fs.appendFile('log.txt', "Twitter feed pull" + '\n' +
					"--------------------------------------------" + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}
			});

	var twitter = keys.twitter;

	var params = {
		q : user,
		count : 20
	}

		twitter.get('statuses/user_timeline', params, gotData);

		function gotData(err, data, response){
			for (var i = 0; i < data.length; i++) {
				console.log('------------------'+ i +'----------------------');
				console.log(data[i].created_at);
				console.log(data[i].text);
				
				var searchObj = {
					time : data[i].created_at,
					text : data[i].text
				}

				fs.appendFile('log.txt', i + ': ' + JSON.stringify(searchObj) + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}
			});
			}
			
		}
}

function getMusic(song){

	if(song === "")
	{
		song = 'ace of bass';

		fs.appendFile('log.txt', "Song search: " + 'ace of bass' + '\n' +
					"--------------------------------------------" + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}


			});


	var spotify = keys.spotify;

	spotify.search({type: 'track', query: 'ace of bass'})
	.then(function(response){
		for (var i = 0; i < response.tracks.items.length; i++) {
			console.log('------------------'+ i +'----------------------');
			console.log("Track: " + response.tracks.items[i].name);
			console.log("Album: " +response.tracks.items[i].album.name);
			console.log("Artist: " +response.tracks.items[i].album.artists[0].name);
			console.log("Listen Here: " +response.tracks.items[i].preview_url);

			var searchObj = {
				track : response.tracks.items[i].name,
				album : response.tracks.items[i].album.name,
				artist : response.tracks.items[i].album.artists[0].name,
				url : response.tracks.items[i].preview_url
			}

			fs.appendFile('log.txt', i + ': ' + JSON.stringify(searchObj) + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}
			});
			
		}
		fs.appendFile('log.txt', "--------------------------------------------" + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}
			});
		
	})
	.catch(function(err){
		console.log(err);
	})
	}

	fs.appendFile('log.txt', "Song search: " + song + '\n' +
					"--------------------------------------------" + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}


			});


	var spotify = keys.spotify;

	spotify.search({type: 'track', query: song})
	.then(function(response){
		for (var i = 0; i < response.tracks.items.length; i++) {
			console.log('------------------'+ i +'----------------------');
			console.log("Track: " + response.tracks.items[i].name);
			console.log("Album: " +response.tracks.items[i].album.name);
			console.log("Artist: " +response.tracks.items[i].album.artists[0].name);
			console.log("Listen Here: " +response.tracks.items[i].preview_url);

			var searchObj = {
				track : response.tracks.items[i].name,
				album : response.tracks.items[i].album.name,
				artist : response.tracks.items[i].album.artists[0].name,
				url : response.tracks.items[i].preview_url
			}

			fs.appendFile('log.txt', i + ': ' + JSON.stringify(searchObj) + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}
			});
			
		}
		fs.appendFile('log.txt', "--------------------------------------------" + '\n', function(err){
				if(err){
					console.log(err);
				} else{
					// console.log('success'); 
				}
			});
		
	})
	.catch(function(err){
		console.log(err);
	})

	
	
}


	function getMovie(movie){

		if(movie === ""){

			

			request("http://www.omdbapi.com/?t=" + 'Mr+Nobody' + "&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  		if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    	console.log('Title: ' + JSON.parse(body).Title);
    	console.log('Year: ' + JSON.parse(body).Year);
    	console.log('Rotten Tomatoes Rating: ' + JSON.parse(body).Ratings[1].Value);
    	console.log('imdb Rating: ' + JSON.parse(body).imdbRating);
    	console.log('Country: ' + JSON.parse(body).Country);
    	console.log('Language: ' + JSON.parse(body).Language);
    	console.log('Plot: ' + JSON.parse(body).Plot);
    	console.log('Actors: ' + JSON.parse(body).Actors);
		  }
		});

		} else {
		
		request("http://www.omdbapi.com/?t=" + movie + "&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  		if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    	console.log('Title: ' + JSON.parse(body).Title);
    	console.log('Year: ' + JSON.parse(body).Year);
    	console.log('Rotten Tomatoes Rating: ' + JSON.parse(body).Ratings[1].Value);
    	console.log('imdb Rating: ' + JSON.parse(body).imdbRating);
    	console.log('Country: ' + JSON.parse(body).Country);
    	console.log('Language: ' + JSON.parse(body).Language);
    	console.log('Plot: ' + JSON.parse(body).Plot);
    	console.log('Actors: ' + JSON.parse(body).Actors);
		  }
		});

		}

}


	function doWhat(){

		fs.readFile("random.txt", "utf8", function(error, data) {

  				// If the code experiences any errors it will log the error to the console.
			  if (error) {
			    return console.log(error);
			  }

			  // We will then print the contents of data
			  // console.log(data);

			  // Then split it by commas (to make it more readable)
			  var dataArr = data.split(",");

			  // We will then re-display the content as an array for later use.
			  getMusic(dataArr[1]);

			});

	}



















