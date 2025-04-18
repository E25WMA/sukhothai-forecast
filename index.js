const axios = require('axios');

const CHANNEL_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
const USER_ID = process.env.LINE_USER_ID;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const getMessage = async () => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sukhothai,TH&appid=${WEATHER_API_KEY}&units=metric&lang=th`);
    const weather = res.data;

    return `🌤 สภาพอากาศวันนี้ที่สุโขทัย:
- อุณหภูมิ: ${weather.main.temp}°C
- สภาพ: ${weather.weather[0].description}
- ความชื้น: ${weather.main.humidity}%`;
  } catch (err) {
    return '❌ ไม่สามารถดึงข้อมูลสภาพอากาศได้';
  }
};

const sendLineMessage = async () => {
  const message = await getMessage();
  await axios.post('https://api.line.me/v2/bot/message/push', {
    to: USER_ID,
    messages: [
      {
        type: 'text',
        text: message,
      }
    ],
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
  });
};

sendLineMessage();
