// a function that returns an array of objects
// each object should have 3 attributes
export default function getListStudents() {
    let students = [
        {id: 1, firstName: 'Guillaume', location: 'San Francisco'},
        {id: 2, firstName: 'James', location: 'Columbia'},
        {id: 5, firstName: 'Serena', location: 'San Francisco'}
    ];

    let listStudents = students.map(function(element) {
        return `${element.id} ${element.firstName} ${element.location}`;
    })
    console.log(listStudents);
}