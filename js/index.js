$(document).ready(function () {
 var channels= ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

function makerequest(x)
  {
    $.getJSON('https://api.twitch.tv/kraken/streams/'+channels[x]+'?callback=?', function(data) {
   console.log(data);
  }

  for (var i=0;i<channels.length;i++)
  {
      var twitch=makerequest(i);

      //$('#stream').append(channels[i]);
    if (data.stream===null)
      {

        $('#result').append('offline');
      }

    else if (data.stream!==null)
      {

        $('#result').append('online');
      }
  });
  }


});
