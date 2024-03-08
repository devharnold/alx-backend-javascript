export default class Classroom{
    constructor (maxStudentsSize) {
        if (typeof maxStudentsSize !== 'number' || !Number.isInteger(maxStudentsSize)) {
            throw new TypeError('Max students size should be an integer');
        }
        this.maxStudentsSize = maxStudentsSize;
    }
    get _maxStudentsSize() {
        return this.maxStudentsSize;
    }
}