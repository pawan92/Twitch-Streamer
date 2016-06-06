$(document).ready(function() {
  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "monstercat", "comster404"];

  for (var i = 0; i < channels.length; i++) {
    //var twitch = makerequest(i);
    (function(i) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + channels[i] + '?callback=?', function(data) {
        console.log(data);
        if ( data.status===422) {
          $('#result').append(
            '<li>' + channels[i] +' unavailable' + '</li>');
        }

        else if ( data.stream) {
          $('#result').append(
            '<a href="http://www.twitch.tv/' + channels[i] + ' target="_blank">' +
            '<li class="online">' + channels[i] + ' online' + '</li>' +
            '</a>'
          );
        } else {
          $('#result').append(
            '<a href="http://www.twitch.tv/' + channels[i] + ' target="_blank">' +
            '<li>' + channels[i] + ' offline' + '</li>' +
            '</a>'
          );
        }
      });
    }(i));
  }
});

//https://api.twitch.tv/kraken/channels/
