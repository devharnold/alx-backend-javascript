function handleResponseFromAPI() {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'photo-profile-1'});
        } else {
            reject(new Error("The fake API is not currently running"));
        }
    });
}
handleResponseFromAPI()
    .then((result) => {
        console.log("Got a response from the API to the console");
    })