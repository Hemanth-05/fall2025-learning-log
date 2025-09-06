function sayHello(name){
    return console.log(`Hello ${name}`)
}

function add (x){
    return console.log(x);
}

module.exports.newFunction = sayHello;
module.exports.newFunction2 = add;