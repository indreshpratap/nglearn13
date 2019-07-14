exports.SEND = (res, error, data) => {

    let response = { status: error ? false : true, data: data };
    if (error) {
        console.warn(error);
        response.error = error;
    }
    res.status(error ? 500 : 200)
        .json(response);
}