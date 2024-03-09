export default class HolbertonCourse {
	constructor(name, length, students = []) {
		this.#checkName(name);
		this.#checkLength(length);
		this.#checkStudents(students);

		this._name = name;
		this._length = length;
		this._students = students;
	}

	#checkName(name) {
		if (typeof name !== 'string' || name.trim() === '') {
			throw new TypeError('name must be a non-empty string');
		}
	}
	#checkLength(length) {
		if (typeof length !== 'number' || length <= 0) {
			throw new TypeError('length must be  a positive number');
		}
	}
	#checkStudents(students) {
		if (!Array.isArray(students) || students.some(student => typeof student !== 'string' || student.trim() === '')) {
			throw new TypeError('students must be in an array')
		}
	}
}