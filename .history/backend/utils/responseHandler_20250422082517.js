exports.CreateSuccessRes = (res, data, statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        data
    });
};

exports.CreateErrorRes = (res, message, statusCode = 400) => {
    res.status(statusCode).json({
        success: false,
        message
    });
};