


// nh open API 거래내역 조회
var request = require('request');

var option = {
    url: 'https://developers.nonghyup.com/InquireDepositorOtherBank.nh',
    method:'POST',
    json: true,
    body:{
      "Header": {
        "ApiNm": "InquireDepositorOtherBank",
        "Tsymd": "20210221",
        "Trtm": "181700",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "DrawingTransferA",
        "IsTuno": "거래고유번호",
        "AccessToken": "사용자 접근 토큰"
      },
      "Bncd": "은행코드",
      "Acno": "조회계좌",
      "Tram": "100"
    }
}


request(option, function(error, response, body) {
    if (error) {
        console.log(err);
    } else {
        console.log(body);
    }
});