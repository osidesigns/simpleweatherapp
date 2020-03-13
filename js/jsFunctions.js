
$(document).ready(function(){
    
    $('#imgContainer').html('<p>Hopefully, your weather is great!</p>');

    $('#lowTempData p').html('LOW');
   
    $('#highTempData p').html('HIGH');

    $('#getWeatherBtn').on('click', function(){

        const queryInput = $('#zipcode').val();

        // PUT IN YOUR API KEY & REMOVE THE SQUARE BRACKETS
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + queryInput + '&appid=[API_KEY_GOES_HERE]', 
            type: 'GET',
            success: function(response){
                let data = response;
                //console.log(data);
                $('#cityName').html(data.name);
                if(data.weather[0].main != null){
                   let weatherCondition = '<img src="imgs/' + data.weather[0].main.toLowerCase() + '.jpg" alt="' + data.weather[0].main + '" />';
                    $('#imgContainer').html(weatherCondition);
                }else{
                    $('#imgContainer').html("(No Image Available)").css('text-align', 'center');
                }

                let lowTemp = parseInt((data.main.temp_min - 273.15) * 1.8 + 32);
                let highTemp = parseInt((data.main.temp_max - 273.15) * 1.8 + 32);

                $('#lowTempData h2').html(lowTemp + '&deg;');
                $('#highTempData h2').html(highTemp + '&deg;');
            }
        });
    });

});