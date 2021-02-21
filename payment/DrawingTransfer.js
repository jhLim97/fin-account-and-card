


// nh open API 거래내역 조회
var request = require('request');

var option = {
    url: 'https://developers.nonghyup.com/DrawingTransfer.nh',
    method:'POST',
    json: true,
    body:{
      "Header": {
        "ApiNm": "DrawingTransfer",
        "Tsymd": "20210221",
        "Trtm": "184000",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "DrawingTransferA",
        "IsTuno": "거래 고유 번호",
        "AccessToken": "사용자 접근 토큰"
      },
      "FinAcno": "핀-어카운트",
      "Tram": "거래금액",
      "DractOtlt": "테스트",
      "MractOtlt": "테스트"
    }
}


request(option, function(error, response, body) {
    if (error) {
        console.log(err);
    } else {
        console.log(body);
    }
});