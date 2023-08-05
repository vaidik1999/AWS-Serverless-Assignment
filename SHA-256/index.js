const crypto = require('crypto');
const axios = require("axios");

exports.handler = async (event) => {
  const { Payload } = event;
  const { value } = Payload;
  const hashedValue = crypto.createHash('sha256').update(value).digest('hex');
  console.log(value)
  await axios.post("https://v7qaxwoyrb.execute-api.us-east-1.amazonaws.com/default/end", {
    banner: "B00925420",
    result: hashedValue,
    arn: "arn:aws:lambda:us-east-1:647868181491:function:SHA256",
    action: 'sha256',
    value
  }).then((res) => console.log(res))

  return {
    success: true
  };
};
