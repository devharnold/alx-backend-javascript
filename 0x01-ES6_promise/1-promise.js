function getFullResponseFromAPI() {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'photo-profile-1' });
        } else {
            reject(new Error("The fake API is not running currently"));
        }
    });
}