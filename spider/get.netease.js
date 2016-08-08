// 引入依赖
let cheerio = require('cheerio');
let request = require('request');
let config = require('./config');

// 获取网易云音乐

// 飙升榜
const HOST = 'http://music.163.com';
const url = `${HOST}/discover`;
let j = request.jar();
// let cookie = request.cookie('_unsign_token=7f19353b1ea37a23b9cbbef327f1ae33; cna=D2mOD5E5cA8CAXg0kxL6ZdlJ; gid=147013824130560; bdshare_firstime=1470138262200; __gads=ID=a80448737e54d60d:T=1470138261:S=ALNI_Mati_Hknzaz6X3v9RbK-aR-PEpLlg; _xiamitoken=ed011f9bb8b0ceb93b9375e91e835cad; user_from=1; join_from=1zufSNtP6D010%2FjCCA; l=AikpBoWM0ACK//n7OMPCZr1pud-AfB1l; isg=ArW1YFLCDtKhvWpoIAafSLYRxDeGq2lE-_FOlTfZ-yw2DtcA-4ZaFJpOLmXC; CNZZDATA921634=cnzz_eid%3D399707945-1462017261-%26ntime%3D1470496570; CNZZDATA2629111=cnzz_eid%3D736108188-1462015812-%26ntime%3D1470496090');
// j.setCookie(cookie, url);

const requestOption = {
  url: url,
  method: 'GET',
  // jar: j
};

function sendRequest(receive) {
  request(requestOption, (err, res, body) => {
    if (err) throw err;
    handleGetBody(body, receive);
  });
}

function handleGetBody(data, receive) {
  let $ = cheerio.load(data);
  let songList = [];
  $('#discover-module .n-bill .n-bilst dl').each(function(index, element) {
    $(this).find('ol li').each(function(i, el) {
      if (!songList[index]) songList[index] = [];
      
      let link = $(this).find('a');
      let song = link.text();
      let url = link.attr('href');
      songList[index].push({
        song,
        url: `${HOST}url`
      });
    });
  });

  receive(songList);

  // return;

  // 输出文件
  // config.output(null, 'netease.html', data);
}

module.exports = sendRequest;
