module.exports = {
  getInfo: (type, receive) => {
    let sendRequest = require(`./get.${type}.js`);
    sendRequest(receive);
  }
};
