$(document).ready(function() {
  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "monstercat", "comster404"];

  for (var i = 0; i < channels.length; i++) {
    //var twitch = makerequest(i);
    (function(i) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + channels[i] + '?callback=?', function(data) {
        console.log(data.stream);
        if ( data.status===422) {
          $('#result').append(
            '<li>' + channels[i] +' unavailable' + '</li>');
        }

        else if ( data.stream) {
          $('#result').prepend(
            '<a href="http://www.twitch.tv/' + channels[i] + ' target="_blank">' +
            '<li class="online">' + channels[i] + ' </a>' + data.stream.game
            +'</li>'
          );

        } else {
          $('#result').append(
            '<a href="http://www.twitch.tv/' + channels[i] + ' target="_blank">' +
            '<li>' + channels[i] + '</a>'+ ' offline' + '</li>'

          );
        }
      });
    }(i));
  }
});

 $(document).click(function online() {
  $("#sleep").click(function(){
        $("").hide();
    });
    $("#closed").click(function(){
        $("#").hide();
    });
    $("#live").click(function(){
        $("#live").show();
    });
});
/*
$("#online").click(function online() {
  $(".hueco").show();
  $(".sacalo").hide();
});
*/
