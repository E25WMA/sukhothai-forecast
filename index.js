const axios = require('axios');

const CHANNEL_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
const USER_ID = process.env.LINE_USER_ID;

const sendLineMessage = async () => {
  const message = {
    type: 'image',
    originalContentUrl: 'https://www.tmd.go.th/assets/tmd/img/weather/daily/small/thailand_today.png',
    previewImageUrl: 'https://www.tmd.go.th/assets/tmd/img/weather/daily/small/thailand_today.png',
  };

  await axios.post('https://api.line.me/v2/bot/message/push', {
    to: USER_ID,
    messages: [message],
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
  });

  console.log("✅ ส่งข้อความพร้อมรูปภาพสำเร็จ");
};

sendLineMessage();
