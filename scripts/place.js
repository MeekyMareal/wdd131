document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 10;
const windSpeed = 12;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

function showWindChill() {
    const windChillDiv = document.getElementById("windchill");

    if (temperature <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temperature, windSpeed);
        windChillDiv.textContent = Math.round(result);
    } else {
        windChillDiv.textContent = "N/A";
    }
}

showWindChill();

const temp = document.getElementById("temperature");
temp.textContent = temperature;

const wind = document.getElementById("wind");
wind.textContent = windSpeed;