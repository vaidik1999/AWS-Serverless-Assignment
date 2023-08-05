const crypto = require('md5');
const axios = require("axios");

exports.handler = async (event) => {
  const { Payload } = event;
  const { value } = Payload;
  const hashedValue = crypto(value);
  console.log(hashedValue, value)

  await axios.post("https://v7qaxwoyrb.execute-api.us-east-1.amazonaws.com/default/end", {
    banner: "B00925420",
    result: hashedValue,
    arn: "arn:aws:lambda:us-east-1:647868181491:function:MD5",
    action: 'md5',
    value
  }).then((res) => console.log(res));
  console.log("HERE")
  return {
    success: true

  };
};
