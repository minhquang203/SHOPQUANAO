const errorHandler = (err, req, res, next) => {
    const error = {
        success: false,
        message: err.message || 'Server Error',
        status: err.status || 500
    };

    // Mongoose duplicate key error
    if (err.code === 11000) {
        error.message = 'Dữ liệu đã tồn tại';
        error.status = 400;
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        error.message = Object.values(err.errors).map(val => val.message);
        error.status = 400;
    }

    res.status(error.status).json({
        success: error.success,
        message: error.message
    });
};

module.exports = errorHandler;