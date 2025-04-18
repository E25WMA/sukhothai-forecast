// File: index.js
const axios = require('axios');

const CHANNEL_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
const USER_ID = process.env.LINE_USER_ID; // หรือ Group ID ถ้าจะส่งเข้ากลุ่ม

const getMessage = async () => {
  // ตัวอย่างข้อความแบบธรรมดา
  return `\uD83C\uDF07 รายงานอากาศประจำวันจาก SukhothaiWeatherBot\nอากาศแจ่มใส มีแดดในช่วงเช้า \u2600\uFE0F\nขอให้มีวันที่สดใสนะครับ!`;
};

const sendLineMessage = async () => {
  const message = await getMessage();

  await axios.post('https://api.line.me/v2/bot/message/push', {
    to: USER_ID,
    messages: [
      {
        type: 'text',
        text: message
      }
    ]
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`
    }
  });

  console.log("✅ ส่งข้อความสำเร็จ");
};

sendLineMessage();
