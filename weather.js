document.getElementById('search-button').addEventListener('click', () => {
    const apiKey = 'f2bc8e086e0389e8a110a004e698e61f';
    const inputCity = document.getElementById('search').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city').innerText = data.name;
                let temp = document.getElementById('temp').innerText = `Temperature: ${data.main.temp ? data.main.temp + '°C' : 'N/A'}`;
                document.getElementById('pressure').innerText = `Pressure: ${data.main.pressure} hPa`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById('sea_level').innerText = `Sea Level: ${data.main.sea_level ? data.main.sea_level + ' hPa' : 'N/A'}`;
                document.getElementById('grnd_level').innerText = `Ground Level: ${data.main.grnd_level ? data.main.grnd_level + ' hPa' : 'N/A'}`;
                document.getElementById('main').innerText = `${data.main.grnd_level ? data.main.grnd_level + ' hPa' : 'N/A'}`;
                document.getElementById('main').innerText = `Weather :   ${data.weather[0].main ? data.weather[0].main :  'N/A' }`;
                var des = document.getElementById('description').innerText = `Weather-desp : ${data.weather[0].description ? data.weather[0].description  : 'N/A'}`;
                document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                document.getElementById('visibility').innerText = `Visibility : ${data.visibility ? data.visibility  : 'N/A'}`;
                document.getElementById('wind').innerText = `Wind: ${data.wind.speed} m/s, ${data.wind.deg}°, gusts ${data.wind.gust} m/s`;
                document.getElementById('rain').innerText = `Rain (1h): ${data.rain ? data.rain['1h'] + ' mm' : 'N/A'}`;
                document.getElementById('cloud').innerText = `Cloudiness: ${data.clouds.all}%`
                const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
                document.getElementById('sun-rise').innerText = `Sunrise: ${sunriseTime}`;
                document.getElementById('sun-set').innerText = `Sunset: ${sunsetTime}`;
                


            }

            else {
                alert("Invalid City Name! ")
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

if (des === 'smoke') {
    
}