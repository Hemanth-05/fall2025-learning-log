const isOrderedDelivered = new Promise(function(resolve, reject) {
    const orderDelivered = true;
    if(orderDelivered){
        resolve("YAYY!! Order is delivered");
    }
    else{
        reject("!!! Order Misplaced");
    }
})

// isOrderedDelivered
// .then(result => console.log(result))     -- Using .then() and .catch()
// .catch(error => console.log(error));

async function infoAbtOrder(){
    try{
        const data = await isOrderedDelivered;
    console.log(data);
    }catch(error){                              // -- Using async and await
        console.log(error);
    }
}

infoAbtOrder();