function getResponseFromAPI() {
    const promise = new Promise((resolve, reject) => {
        if (success) {
            resolve(value);
        } else {
            reject(error);
        }
    });
}