module.exports = {
  getInfo: (type, options, receive) => {
    try {
      let sendRequest = require(`./getConfig/get.${type}.js`);
      sendRequest(receive);
    } catch(err) {
      receive({ err: '无法找到请求的路径' }); 
    }
  }
};
