import Classroom from "./0-classroom";

class ClassRoom2 extends Classroom{
    constructor(initializeRooms) {
        this.rooms = [];
    }
    countRooms() {
        if (this.initializeRooms) {
            for (let i = 0; i < this.initializeRooms; i++) {
                this.rooms.push(i + 1);
            }
        }
    }
    get roomNumbers() {
        this.countRooms();
        return this.countRooms.sort((a, b) => b - a);
    }
}