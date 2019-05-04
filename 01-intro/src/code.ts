import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const datasource = of(1, 2, 5, 7, 8);

let result: string = '';

const subscription = datasource
    .pipe(
        filter(v => v >= 5),
        map(v1 => v1 * 2)
    )
    .subscribe(finalValue => {
        console.log(finalValue);
        result =  result + finalValue + ' - ';
        document.getElementById('myContent').innerHTML = result;
    });
