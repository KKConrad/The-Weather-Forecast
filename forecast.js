jQuery(document).ready(function($) {
    $.ajax({
        url : "http://api.wunderground.com/api/09d47c2436583517/geolookup/conditions/q/IA/Cedar_Rapids.json",
        dataType : "jsonp",
        success : function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            console.log(parsed_json);
           /* alert("Current temperature in " + location + " is: " + temp_f);*/
        }


    });
});

//to-do list:

function setWeather(weather) {
    //be able to set weather classes manually
}

function setTemp(temperature) {
    //also be able to set the temperature.
}

//get userWeather when they enter in a location using zipcode, or city & state,
//and then be able to have the API read the string and return information