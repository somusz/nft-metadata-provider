function handleError({ res, error }) {
    let errorMessage = (typeof error === 'string') ? error : error.message;

    res.status(500).send(errorMessage);
}

module.exports = {
    handleError
}