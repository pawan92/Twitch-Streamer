$(document).ready(function () {
 var channels= ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
   console.log(data);

    if (data.stream===null)
      {
        console.log("offline");
      }

    else if (data.stream!==null)
      {
        console.log("online");
      }
  });

});
