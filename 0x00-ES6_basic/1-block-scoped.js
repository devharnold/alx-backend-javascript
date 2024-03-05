export default function taskBlock(trueOrfalse) {
    const task = false;
    const task2 = true;

    if(trueOrfalse) {
        const task = true;
        const task2 = false;
    }
    return [task, task2];
}