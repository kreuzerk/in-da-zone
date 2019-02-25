function main() {
    document.getElementById('eventTaskButton').addEventListener('click', () => {
        console.log('Congrats! You clicked the button');
    });

    document.getElementById('macroTaskButton').addEventListener('click', () => {
        setTimeout(() => {
            console.log('Macrotask executed')
        }, 2000);
    });

    document.getElementById('microTaskButton').addEventListener('click', () => {
        Promise.resolve('Microtask executed').then(e => console.log(e));
    });
}

const myZone = Zone.current.fork(logZoneSpec);
myZone.run(main);
