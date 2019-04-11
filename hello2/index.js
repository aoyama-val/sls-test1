'use strict';

const axios = require('axios');

exports.handler = async (event) => {
    console.log("This is console.log");
    console.error("This is console.error");

    const params = {
        a: 'hoge',
        b: 123,
    };
    let res = await axios.get('http://httpbin.org/get', { params: params });

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'axios test',
            result: res.data,
        }),
    };
    return response;
};
