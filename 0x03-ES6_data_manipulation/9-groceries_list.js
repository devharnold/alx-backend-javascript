// function that returns a map of 
// groceries with the items(name, quantity)

export default function groceriesList(name, quantity) {
    let values = [
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5]
    ];
    return new Map(values);
}