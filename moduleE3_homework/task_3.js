function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );
