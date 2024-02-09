const apiKey = "YOUR_API_KEY";

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pleasant%20Grove,US&appid=${apiKey}&units=metric`);
        const data = await response.json();

        updateWeatherInfo(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function updateWeatherInfo(weatherData) {
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;

    document.getElementById("temperature").innerText = `${temperature} °C`;
    document.getElementById("weatherDescription").innerText = description;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}.png`;
}

window.addEventListener("load", getWeather);
