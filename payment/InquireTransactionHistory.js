


// nh open API 거래내역 조회
var request = require('request');

var option = {
    url: 'https://developers.nonghyup.com/InquireTransactionHistory.nh',
    method:'POST',
    json: true,
    body:{
      "Header": {
        "ApiNm": "InquireTransactionHistory",
        "Tsymd": "20210220",
        "Trtm": "180400",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "ReceivedTransferA",
        "IsTuno": "거래고유번호",
        "AccessToken": "사용자 접근 토큰"
      },
      "Bncd": "은행코드",
      "Acno": "조회계좌",
      "Insymd": "20210218",
      "Ineymd": "20210220",
      "TrnsDsnc": "A",
      "Lnsq": "DESC",
      "PageNo": "1",
      "Dmcnt": "100"
    }
}


request(option, function(error, response, body) {
    if (error) {
        console.log(err);
    } else {
        console.log(body);
    }
});