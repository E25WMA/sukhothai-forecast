const axios = require('axios');

const CHANNEL_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
const USER_ID = process.env.LINE_USER_ID;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY; // ต้องเพิ่มใน GitHub Secrets

const getMessage = async () => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sukhothai,TH&appid=${WEATHER_API_KEY}&units=metric&lang=th`);
  const weather = res.data;

  return `🌤 สภาพอากาศวันนี้ที่สุโขทัย:
- อุณหภูมิ: ${weather.main.temp}°C
- สภาพ: ${weather.weather[0].description}
- ความชื้น: ${weather.main.humidity}%`;
};
