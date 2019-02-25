function foo() {
    console.log('Foo');
}

function bar() {
    console.log('Bar');
}

function baz() {
    console.log('baz');
}

function later() {
    console.log('Always to late');
}

function main() {
    foo();
    setTimeout(() => later(), 2000);
    bar();
    baz();
}

const myZoneSpec = {
    onInvokeTask: function (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs) {
        console.log('Before task');
        return parentZoneDelegate.invokeTask(targetZone, delegate, applyThis, applyArgs);
    }
};

const myZone = Zone.current.fork(myZoneSpec);
myZone.run(main);