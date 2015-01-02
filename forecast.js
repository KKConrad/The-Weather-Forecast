jQuery(document).ready(function($) {
    $.ajax({
        url : "http://api.wunderground.com/api/09d47c2436583517/geolookup/conditions/q/IA/Cedar_Rapids.json",
        dataType : "jsonp",
        success : function(parsed_json) {
            var location = parsed_json['location']['city'];
            temp_f = parsed_json['current_observation']['temp_f'];
            setTemp(temp_f);
            console.log(parsed_json);

           /* alert("Current temperature in " + location + " is: " + temp_f);*/
        }


    });
});

var temp_f;

function setWeather(weather) {
    var weatherSelector = "#forecast";
    var weatherScreen = $(weatherSelector);
    weatherScreen.removeClass();
    var weatherClass = (weather);
    weatherScreen.addClass(weatherClass);
    //when typing weather, it must be a string;
}

function setTemp(temperature) {
    var tempSelector = "#todaystemp";
    var tempset = $(tempSelector);
    tempset.html(temperature)
}



//get userWeather whe4n they enter in a location using zipcode, or city & state,
//and then be able to have the API read the string and return information