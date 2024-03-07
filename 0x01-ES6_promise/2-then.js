function handleResponseFromAPI(promise){
    return promise.then((result) => {
        console.log("Got a response from the API to the console");
        return { status: 200, body: 'success'};
    }).catch((error) => {
        console.error("Error occured:", error.message);
        return new Error();
    });
}