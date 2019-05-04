import { fromEvent } from "rxjs";

// Let's create an observable that will listen to mouse click event
const observable = fromEvent(document.getElementById('myButton'), 'click');


/*
    A subscription (listener) is the guy that will be notified when something happens from observable.
    Each subscription can react at your own way by given a callback function or object to subscribe method.
    This function is known as observer.
*/

const observer1 = (event: any) => console.log(event);
const subscription1 = observable.subscribe(observer1);


let count = 0;
const observer2 = (event: any) => {
    document.getElementById('myContent').innerHTML = '' + (++count);
};

const subscription2 = observable.subscribe(observer2);