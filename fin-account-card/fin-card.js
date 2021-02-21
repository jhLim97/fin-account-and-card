


// nh open API 핀-어카운트 생성 및 확인
var request = require('request');

var headers = {
        "ApiNm": "OpenFinCardDirect",
        "Tsymd": "20210221",
        "Trtm": "174900",
        "Iscd": "기관번호",
        "FintechApsno": "001",
        "ApiSvcCd": "DrawingTransferA",
        "IsTuno": "거래고유번호",
        "AccessToken": "사용자 접근 토큰"
}

var optionNew = {
    url: 'https://developers.nonghyup.com/OpenFinCardDirect.nh',
    method:'POST',
    json: true,
    body:{
        "Header": headers,
        "Brdt": "생년월일",
        "Cano": "카드번호"
    }
}

var optionCheck = {
    url: 'https://developers.nonghyup.com/CheckOpenFinCardDirect.nh',
    method:'POST',
    json: true,
    body:{
        "Header": headers,
        "Rgno": "",
        "Brdt": "생년월일",
    }
}

var FinCard = function(option) {
    request(option, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
            headers.ApiNm = "CheckOpenFinCardDirect";
            headers.IsTuno = Date.now();
            optionCheck.body.Rgno=body.Rgno;
            CheckFinCard(optionCheck);
        }
    })
};

var CheckFinCard = function(option) {
    request(option, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    })
};

FinCard(optionNew);
