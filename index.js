'use strict';

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            event: event,
        }),
        hoge: "modified4",
    };
    return response;
};
