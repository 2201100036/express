var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const imageUrl = data.message; // 犬の画像URLを取得
			res.json(data);
	}	
    });
});

module.exports = router;