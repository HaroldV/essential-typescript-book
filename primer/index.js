let hatPrice = 100;
console.log(`Hat price:${hatPrice}`);
let bootPrice = "100";
console.log(`Boots price: ${bootPrice}`);

let sumPrices = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)));


let _totalPrice = sumPrices(hatPrice, bootPrice);
console.log(`Total Price: ${_totalPrice}`);
console.log(`Total Price: ${typeof _totalPrice}`);

let numTotalPrice = sumPrices(1, 2, 3);
console.log(`Total Price: ${ numTotalPrice}`);
console.log(`Total Price: ${typeof numTotalPrice}`);

let _numTotalPrice = sumPrices(1, 2);
console.log(`Total Price: ${ _numTotalPrice}`);
console.log(`Total Price: ${typeof _numTotalPrice}`);

if(hatPrice == bootPrice) {
    console.log("Price are the same");
} else {
    console.log("Price are different");
}

let totalPrice__ = sumPrices(100,200, undefined, false, "hello");
console.log(`Total Price__: ${totalPrice__}`);
let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);


// Working with Arrays
let names = ["Hat", "Boots", "Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// Spread Operator
let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array element: ${element}`))

// Working with Object
let hat = {
    name: "Hat",
    price: 100,
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price() {
        return this._price;
    },

    writeDetails: function() {
        console.log(`${this.name}: ${this,price}, ${this.priceIncTax}`);
    }
};

let boots = {
    name: "Boots",
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
}

let totalPriceObject = sumPrices(hat.price, boots.price);
console.log(`Total ${totalPriceObject}, ${typeof totalPriceObject}`);


// Adding, Changing and Deleting Object Properties
let gloves = {
    productName: "Gloves",
    price: "40"
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

let totalPriceAddChanDeleObject  = sumPrices(hat.price, boots.price, gloves.price);
console.log("Total:",totalPriceAddChanDeleObject);

// Guarding Against Undefined Objects and Properties
let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);


// Using the Spread and Rest Operators on Objects
let otherHat = { ...hat };
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`)

let additionalProperties = { ...hat, discounted: true };
console.log(` Additional: ${JSON.stringify(additionalProperties)}`);

let replaceProperties = { ...hat, price: 10 };
console.log(`Replaced: ${JSON.stringify(replaceProperties)}`);

let { price, ...someProperties} = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);

// Defining Getters and Setters
console.log(`Hat: ${hat._price}, ${hat.priceIncTax}`);
hat._price = 120;
console.log(`Hat: ${hat._price}, ${hat.priceIncTax}`);

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = 120;
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

hat.writeDetails();
hat.price = 120;
hat.writeDetails();


// Understanding the this Keyword in Stand-Alone Functions
function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`)
}

greeting = "Hello";

writeMessage('It is sunny today');
writeMessage.call(global, "it is sunny today");

