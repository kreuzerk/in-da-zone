function main() {
    document.getElementById('coolButton').addEventListener('click', () => {
        console.log('Congrats! You clicked the button');
    });
}

const myZone = Zone.current.fork(logZoneSpec);
myZone.run(main);
