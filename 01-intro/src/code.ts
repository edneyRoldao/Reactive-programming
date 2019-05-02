import { Observable } from "rxjs/index";

let observable = Observable.create((observer: any) => {
    setInterval(() => {
        observer.next('sending event');
    }, 2000);
});

let observer1 = observable.subscribe((x: any) => addItem('I am the first: ' + x));

let observer2 = observable.subscribe((x: any) => {
    console.log('I am the second:', x);
})


setTimeout(() => {
    observer1.unsubscribe();
}, 10000);

setTimeout(() => {
    observer2.unsubscribe();
}, 20000);

function addItem(value: any): void {
    let node  = document.createElement('li');
    let textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}