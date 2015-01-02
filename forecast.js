jQuery(document).ready(function($) {
    $("#locationsubmit").click(function() {
        console.log('clicked');
        updateWeather();
        return false;
    });
});

/*
var temp_f;
*/

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

function parseWeather(wuWeather) {
    if (wuWeather === "Overcast" || wuWeather === "Mostly Cloudy" || wuWeather === "Heavy Fog") {
        return "overcastweather";
    } else if (wuWeather === "Clear") {
        return "sunnyweather";
}

function updateWeather() {
    $.ajax({
        url : "http://api.wunderground.com/api/09d47c2436583517/geolookup/conditions/q/" + getZipcode() + ".json",
        dataType : "jsonp",
        success : function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            var weather = parsed_json['current_observation']['weather'];
            setTemp(temp_f);
            setWeather(parseWeather(weather));
            console.log(parsed_json);

            /* alert("Current temperature in " + location + " is: " + temp_f);*/
        }
    });
}

function getZipcode() {
    return $("#zipcode").val();
}



//get userWeather whe4n they enter in a location using zipcode, or city & state,
//and then be able to have the API read the string and return information