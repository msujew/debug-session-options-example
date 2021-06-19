const { spawn } = require('child_process');

console.log('Process started');
function run() {
    setTimeout(() => {
        console.log('Spawning other process');
        spawn('node', ['index.js']);
        // Insert more spawn commands here to test the tree behavior
        wait();
    }, 5000);
}

function wait() {
    setTimeout(() => {
        wait();
    }, 10000);
}
run();
