const { APEX_API } = require('./lib/configs');
const axios = require('axios').default;

module.exports = {
  getCurrentMap: () =>
    new Promise(async (resolve, reject) => {
      try {
        const {
          data: { battle_royale },
        } = await axios.get(`${APEX_API.URL}&auth=${APEX_API.KEY}`);
        resolve(battle_royale);
      } catch (error) {
        console.log(error);
        reject('Error fetching the current map 🔴👀. Try again later.');
      }
    }),
};
