console.log('keys loaded');

var keyData = {

	twitterKeys : {
		  consumer_key: 'cMm3WxuXcM84HiCKyi0pWzSDd',
		  consumer_secret: 'Von6NRWoGZB07MgrUUauzK5ETDQYgHDfCT3UJelokBKAidgm03',
		  access_token_key: '909794604450492416-LQ4NwESOEhFqiNCQ8JFGBT0RDyxsC7w',
		  access_token_secret: 't6lcoNDyaDoCXu1TYBLqSZMwBsv6JTsqVxCioUTv6RlVi'
		},

	spotifyKeys : {
		id: 'cceab1add11f487b99609869c4ea38fc',
		secret: '097f98177d02464693f9e0660aeeeabd'
	}
}

var twit = require('twitter');

var twitter = new twit({

	consumer_key: 'cMm3WxuXcM84HiCKyi0pWzSDd',
	consumer_secret: 'Von6NRWoGZB07MgrUUauzK5ETDQYgHDfCT3UJelokBKAidgm03',
	access_token_key: '909794604450492416-LQ4NwESOEhFqiNCQ8JFGBT0RDyxsC7w',
	access_token_secret: 't6lcoNDyaDoCXu1TYBLqSZMwBsv6JTsqVxCioUTv6RlVi'

})

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
		id: 'cceab1add11f487b99609869c4ea38fc',
		secret: '097f98177d02464693f9e0660aeeeabd'
	});


module.exports = {
	keyData: keyData,
	twitter: twitter,
	spotify: spotify
}

