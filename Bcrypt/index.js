const bcrypt = require('bcryptjs');
const axios = require("axios");

exports.handler = async (event) => {
  const { Payload } = event;
  const { value } = Payload;
  const saltRounds = await bcrypt.genSalt(10);
  const hashedValue = await bcrypt.hash(value, saltRounds);

  await axios.post("https://v7qaxwoyrb.execute-api.us-east-1.amazonaws.com/default/end", {
    banner: "B00925420",
    result: hashedValue,
    arn: "arn:aws:lambda:us-east-1:647868181491:function:Bcrypt",
    action: 'bcrypt',
    value
  }).then((res) => console.log(res));

  return {
    success: true
  };
};
