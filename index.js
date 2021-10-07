function receivesAFunction(callFunction) {
    callFunction();
};

// function namedFunction() {
// };

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named Function");
    };
};

function returnsAnAnonymousFunction() {
    console.log("Anonymous Function");
    return function() {
        console.log("the end");
    }
}