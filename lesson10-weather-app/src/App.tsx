import { useState, useEffect } from "react";

interface Weather {
  temperature: number;
  windspeed: number;
}

function App() {
  const [city, setCity] = useState("Manila");
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // City coordinates (for simplicity)
        const coords: Record<string, { lat: number; lon: number }> = {
          Manila: { lat: 14.6, lon: 120.98 },
          Cebu: { lat: 10.32, lon: 123.9 },
          Davao: { lat: 7.07, lon: 125.61 },
        };

        const { lat, lon } = coords[city] || coords["Manila"];
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error(error);
        setWeather(null);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <div className="max-w-sm mx-auto mt-10 text-center font-sans">
      <h1 className="text-2xl font-bold mb-4">🌤 Weather App</h1>

      <input
        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city (e.g. Manila, Cebu, Davao)"
      />

      {weather ? (
        <div className="mt-4 bg-blue-50 p-4 te rounded shadow">
          <p>🌡 Temperature: {weather.temperature}°C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
        </div>
      ) : (
        <p className="mt-4 text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default App;
