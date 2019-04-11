'use strict';

exports.handler = async (event) => {
    console.log("This is console.log");
    console.error("This is console.error");
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            event: event,
        }),
        hoge: "modified6",
    };
    return response;
};
