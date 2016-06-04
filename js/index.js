$(document).ready(function () {
 var channels= ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","monstercat"];

for (var i=0; i < channels.length; i++) {
      //var twitch = makerequest(i);
    (function(i) {
        $.getJSON('https://api.twitch.tv/kraken/streams/'+ channels[i] + '?callback=?',   function(data) {
      console.log(data);
     //$('#result').append(JSON.stringify(data.stream));
    if (data.stream === null) {

        $('#result').append('<li>' + channels[i] + ' offline' + '</li>')
      } else if (data.stream!==null) {

        $('#result').append('<li>' + channels[i] + ' online' + '</li>');
      }
  });
    }(i));
}
});
