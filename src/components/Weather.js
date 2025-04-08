"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { basePath } = useRouter();

  // Weather icon mapping
  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      "01d": `${basePath}/images/clear.png`,
      "01n": `${basePath}/images/clear.png`,
      "02d": `${basePath}/images/cloud.png`,
      "02n": `${basePath}/images/cloud.png`,
      "03d": `${basePath}/images/cloud.png`,
      "03n": `${basePath}/images/cloud.png`,
      "04d": `${basePath}/images/drizzle.png`,
      "04n": `${basePath}/images/drizzle.png`,
      "09d": `${basePath}/images/rain.png`,
      "09n": `${basePath}/images/rain.png`,
      "10d": `${basePath}/images/rain.png`,
      "10n": `${basePath}/images/rain.png`,
      "13d": `${basePath}/images/snow.png`,
      "13n": `${basePath}/images/snow.png`,
    };

    return iconMap[iconCode] || `${basePath}/images/clear.png`;
  };
  //   alert, if user doesn't enter any city and click search button
  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }

    setIsLoading(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"dd17db1dcc505af08d9e75631a1107ef"}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        setIsLoading(false);
        return;
      }

      const iconPath = getWeatherIcon(data.weather[0].icon);

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: iconPath,
        description: data.weather[0].description,
      });
    } catch (error) {
      console.error("Error in fetching weather data:", error);
      setWeatherData(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(inputRef.current.value);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
      <div className="flex items-center gap-2 mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search city..."
          className="w-full px-4 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={() => search(inputRef.current.value)}
          className="bg-white p-3 rounded-full hover:bg-gray-100 transition"
        >
          <Image
            src={`${basePath}/images/search.png`}
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : weatherData ? (
        <>
          <div className="flex justify-center py-4">
            <Image
              src={weatherData.icon}
              alt="Weather"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <p className="text-6xl font-semibold mb-2">
              {weatherData.temperature}°C
            </p>
            <p className="text-2xl mb-1">{weatherData.location}</p>
            <p className="text-lg mb-6 capitalize text-blue-100">
              {weatherData.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex items-center gap-4 bg-blue-500/30 p-4 rounded-lg">
              <Image
                src={`${basePath}/images/humidity.png`}
                alt="Humidity"
                width={40}
                height={40}
              />
              <div>
                <p className="text-xl font-medium">{weatherData.humidity}%</p>
                <span className="text-sm text-blue-100">Humidity</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-blue-500/30 p-4 rounded-lg">
              <Image
                src={`${basePath}/images/wind.png`}
                alt="Wind Speed"
                width={40}
                height={40}
              />
              <div>
                <p className="text-xl font-medium">
                  {weatherData.windSpeed} m/s
                </p>
                <span className="text-sm text-blue-100">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl">No weather data available</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
