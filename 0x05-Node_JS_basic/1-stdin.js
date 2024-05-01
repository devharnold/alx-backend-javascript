function displayMessage(message) {
    console.log(message);
}

function getUserInput() {
    return new Promise((resolve, reject) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

async function main() {
    displayMessage("Welcome to Holberton School, what is your name?");
    const name = await getUserInput();
    //display the user's name
    displayMessage(`Your name is: ${name}`);
    //display the closing message
    displayMessage("This important software is now closing");
}
main();

modules.exports = getUserInput;