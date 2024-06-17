


function successResponse(res, status, statusCode, message, data = null) {
    const response = {
        "status": status,
        "statusCode": statusCode,
        "message": message,
    };
    if (data !== null) {
        response.data = data;
    }
    res.status(statusCode).json(response);
}


function failureResponse(res, statusCode, message) {
    const response = {
        "status": "error",
        "statusCode": statusCode,
        "message": message,
    };

    res.status(statusCode).json(response);
}

module.exports = {successResponse , failureResponse}