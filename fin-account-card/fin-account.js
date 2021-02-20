


// nh open API 핀-어카운트 생성 및 확인
var request = require('request');

var headers = {
        "ApiNm": "OpenFinAccountDirect",
        "Tsymd": "20210221",
        "Trtm": "000600",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "DrawingTransferA",
        "IsTuno": "거래고유번호",
        "AccessToken": "사용자 접근 토큰"
}

var optionNew = {
    url: 'https://developers.nonghyup.com/OpenFinAccountDirect.nh',
    method:'POST',
    json: true,
    body:{
        "Header": headers,
        "DrtrRgyn": "Y",
        "BrdtBrno": "생년월일",
        "Bncd": "은행코드",
        "Acno": "계좌번호"
    }
}

var optionCheck = {
    url: 'https://developers.nonghyup.com/CheckOpenFinAccountDirect.nh',
    method:'POST',
    json: true,
    body:{
        "Header": headers,
        "Rgno": "",
        "BrdtBrno": "생년월일",
    }
}

var FinAccount = function(option) {
    request(option, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
            headers.ApiNm = "CheckOpenFinAccountDirect";
            headers.IsTuno = Date.now();
            optionCheck.body.Rgno=body.Rgno;
            CheckFinAccount(optionCheck);
        }
    })
};

var CheckFinAccount = function(option) {
    request(option, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    })
};

FinAccount(optionNew);
