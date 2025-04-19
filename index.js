const axios = require('axios');

const CHANNEL_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
const USER_ID = process.env.LINE_USER_ID;

const getMessage = async () => {
  const image = 'https://www.tmd.go.th/images/radar/loop_radar_north_east.png';
  const message = '📍 พยากรณ์อากาศวันนี้\nดูภาพเรดาร์:';
  return {
    type: 'image',
    originalContentUrl: image,
    previewImageUrl: image
  };
};

const sendLineMessage = async () => {
  const message = await getMessage();

  await axios.post(
    'https://api.line.me/v2/bot/message/push',
    {
      to: USER_ID,
      messages: [message]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`
      }
    }
  );
};

sendLineMessage();
