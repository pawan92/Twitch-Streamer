$(document).ready(function() {
  //initiale and declare array of channels
  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "monstercat", "comster404","streamerhouse"];

  //Loop through each element in the array to output which channel is online, offline, or closed
  for (var i = 0; i < channels.length; i++) {
    //var twitch = makerequest(i);
    //call API
    (function(i) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + channels[i] + '?callback=?', function(data) {
        console.log(data.stream);

        //If data stream from API =422 channel is closed
        if ( data.status===422) {
          $('#result').append(
            '<li class="unavailable">' + channels[i] + '<span class="toRight">'+' Closed' + '</span></li>');
        }

        //If there is an active data stream it is currently live.
        else if ( data.stream) {
          $('#result').prepend(
            '<a href="http://www.twitch.tv/' + channels[i] + '" target="_blank">' +
            '<li class="online">' + channels[i] + ' </a>' + '<span class="toRight">' + data.stream.game
            +'</span></li>'
          );
         }

        //Else if the data stream is not null it is offline
        else {
          $('#result').append(
            '<a href="http://www.twitch.tv/' + channels[i] + '" target="_blank">' +
            '<li class="offline">' + channels[i] + '</a>'+ '<span class="toRight"> offline</span></li>'

          );
        }
      });
    }(i));
  }
});

 //Filter to display offline channels
  $("#offline").click(function(){
        $('li.online').hide();
        $('li.unavailable').hide();
        $('li.offline').show();

    });
//Filter to display closed channels
    $("#closed").click(function(){
        $("li.online").hide();
        $("li.offline").hide();
        $("li.unavailable").show();
    });
//Filter to display live channels
    $("#live").click(function(){
        $('li.offline').hide();
        $("li.unavailable").hide();
        $("li.online").show();
    });
//Filter to show all channels
$("#all").click(function(){
        $('li.offline').show();
        $("li.unavailable").show();
        $("li.online").show();
    });
