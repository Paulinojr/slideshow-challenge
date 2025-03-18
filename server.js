import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/weather", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendWeatherData = async () => {
    try {
      const apiKey = "271743bebdaac1fc0ad4320db184e002";
      const lat = "-22.9527";
      const lon = "-46.5442";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  sendWeatherData();
  const interval = setInterval(sendWeatherData, 10000);

  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
