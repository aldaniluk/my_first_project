"use strict";
//my key : 'a6893c5e7802864d24ec2f1d62c5cc70'

$(document).ready(function() {
  func();
  myTimer;
});

var i=0;
var array = [625143,623549,630429,625665,629634,620127];

var func = function() {
  $.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/group?id='+array[i]+'&units=metric&APPID=a6893c5e7802864d24ec2f1d62c5cc70'
  })
  .done(function(data) { 
        console.log("success"); 
        console.log(data.list);
        var template = Handlebars.compile( $('#template').html());
        $('.ready').append(template(data.list));

        if (i == array.length - 1) {
            console.log("END");
            clearTimeout(myTimer);
          }
          i++;
  })
  .fail(function() {
      console.log("error"); 
  })
};

var myTimer = setInterval(func, 1000);