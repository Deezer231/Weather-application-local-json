const fetchWeatherData = async () => {
    const cityInput = document.getElementById("city-input");
    const city = cityInput.value.trim().toLowerCase(); // Convert input to lowercase

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        // THIS Fetches JSON Data
        const response =  fetch("sample.json");
        const data =  response.json();
        console.log("Fetched Data:", data); 

        // Find city in JSON data
        const cityData = data.find(item => item.cityName.toLowerCase() === city);

        if (cityData) {
            console.log("City Found:", cityData); 

            // Clears DA old data on refresh of page and save fresh data
            localStorage.removeItem("weatherData");
            localStorage.setItem("weatherData", JSON.stringify(cityData));
            console.log("Updated LocalStorage:", JSON.parse(localStorage.getItem("weatherData"))); 
            alert(`Weather data updated for: ${cityData.cityName}`); // Alert to confirm update

            updateWeatherUI(cityData); // Ensure UI updates instantly
        } else {
            alert("City not found. Please try another city.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching weather data.");
    }
};

const updateWeatherUI = (weatherData) => {
    if (!weatherData) {
        alert("No weather data available. Please search for a city first.");
        return;
    }
    console.log("Updating UI with data:", weatherData); 
    
    document.getElementById("temperature").innerText = `Temperature: ${weatherData.temperatureCelsius}°C`;
    document.getElementById("humidity").innerText = `Humidity: ${weatherData.humidity}%`;
    document.getElementById("uv-index").innerText = `UV Index: ${weatherData.uvIndex}`;
    document.getElementById("wind-speed").innerText = `Wind Speed: ${weatherData.windSpeed} km/h`;
};

// ✅ Ensure buttons fetch updated data when clicked
document.getElementById("temperature-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("weatherData"));
    console.log("Temperature button clicked. LocalStorage Data:", data);
    if (data) updateWeatherUI(data);
    else alert("Please search for a city first.");
});

document.getElementById("humidity-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("weatherData"));
    console.log("Humidity button clicked. LocalStorage Data:", data);
    if (data) updateWeatherUI(data);
    else alert("Please search for a city first.");
});

document.getElementById("uv-index-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("weatherData"));
    console.log("UV Index button clicked. LocalStorage Data:", data);
    if (data) updateWeatherUI(data);
    else alert("Please search for a city first.");
});

document.getElementById("wind-speed-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("weatherData"));
    console.log("Wind Speed button clicked. LocalStorage Data:", data);
    if (data) updateWeatherUI(data);
    else alert("Please search for a city first.");
});


window.addEventListener("load", () => {
    const savedData = JSON.parse(localStorage.getItem("weatherData"));
    console.log("Page loaded. LocalStorage Data:", savedData);
    if (savedData) {
        updateWeatherUI(savedData);
    }
});
