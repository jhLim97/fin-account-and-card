


// nh open API 거래내역 조회
var request = require('request');

var option = {
    url: 'https://developers.nonghyup.com/InquireBalance.nh',
    method:'POST',
    json: true,
    body:{
      "Header": {
        "ApiNm": "InquireBalance",
        "Tsymd": "20210221",
        "Trtm": "182400",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "DrawingTransferA",
        "IsTuno": "거래고유번호",
        "AccessToken": "사용자 접근 토큰"
      },
      "FinAcno": "핀-어카운트"
    }
}


request(option, function(error, response, body) {
    if (error) {
        console.log(err);
    } else {
        console.log(body);
    }
});