'use strict';

exports.getlogHeader(req, msg) {
    let ip;
    if (req) {
        ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    }
    else {
        ip = 'unknown';
    }
    let currentDate = Date();
    return currentDate.toDateString  + " [" + ip + "] " + msg;
}

exports.createJsonResponse = function(status, msg, body) {
    return {status: status, msg: msg, body: body};
};