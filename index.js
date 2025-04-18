const axios = require('axios');

const CHANNEL_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
const USER_ID = process.env.LINE_USER_ID;

const getMessage = async () => {
  return '📡 รายงานพยากรณ์อากาศประจำวันที่ SukhothaiWeatherBot แจ้งให้ทราบครับ!';
};

const sendLineMessage = async () => {
  const message = await getMessage();
  await axios.post('https://api.line.me/v2/bot/message/push', {
    to: USER_ID,
    messages: [
      {
        type: 'text',
        text: message,
      },
    ],
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
  });
};

sendLineMessage();
