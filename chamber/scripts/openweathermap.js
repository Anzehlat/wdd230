const apiKey = '1fac095749ac46fff75a2ba9755bf75e';
const city = 'pleasant grove, ut';
const state = 'UT';
const weatherInfoElement = document.getElementById('weatherInfo');

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`);
        const data = await response.json();

        console.log('API Response:', data); 

        if (response.ok) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherText = `Current Weather: ${temperature}°F, ${description}`;
            weatherInfoElement.textContent = weatherText;
        } else {
            console.error('Failed to fetch weather data:', data.message);
            weatherInfoElement.textContent = 'Weather data not available';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoElement.textContent = 'Weather data not available';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded. Fetching weather...');
    getWeather();
});
