const twilio = require('twilio');

const accountSid = 'ACbd9be6c1184198b2e0ed472dbc728156';
const authToken = 'f4b3c10eb43d9da5e3fe6232408cc1b6';

module.exports = new twilio.Twilio(accountSid, authToken);