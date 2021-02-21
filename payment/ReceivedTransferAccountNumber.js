


// nh open API 농협입금이체
var request = require('request');

var option = {
    url: 'https://developers.nonghyup.com/ReceivedTransferAccountNumber.nh',
    method:'POST',
    json: true,
    body:{
      "Header": {
        "ApiNm": "ReceivedTransferAccountNumber",
        "Tsymd": "20210221",
        "Trtm": "184500",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "ReceivedTransferA",
        "IsTuno": "거래 고유 번호",
        "AccessToken": "사용자 접근 토큰"
      },
      "Bncd": "은행코드",
      "Acno": "계좌번호",
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