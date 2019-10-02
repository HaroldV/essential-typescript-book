import calcTax from "./tax"

let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax(){
        return Number(this.price) * 1.2;
    }
}

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
console.log(`toString: ${hat.toString()}`)

// Inspecting and Modifying an Object’s Prototype
let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax(){
        return Number(this.price) * 1.2;
    }
}

let hatPrototype = Object.getPrototypeOf(hat);
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

hatPrototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

console.log(hat.toString());
console.log(boots.toString());


// Creating Custom Prototypes
let productProto = {
    toString: function() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

Object.setPrototypeOf(hat,productProto);
Object.setPrototypeOf(boots,productProto);

console.log(hat.toString());
console.log(boots.toString());

let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function() {
    return `toStringa: Name: ${this.name}, Price: ${this.price}`;
}

let hatProduct = new Product("Hat", 300);
let bootsProduct = new Product("Boots", 400);

console.log(hatProduct.toString());
console.log(bootsProduct.toString());


// Chaining Constructor Functions
let TaxedProduct = function(name, price, taxRate) {
    Product.call(this, name, price);
    this.taxRate = taxRate;
}
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.totTaxString = function() {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}

let hat_ = new TaxedProduct("Hat", 100, 1.2);

console.log(hat_.totTaxString());

// Checking Prototype Types
console.log(`hat and TaxedProduct: ${ hat_ instanceof TaxedProduct}`);
console.log(`hat and TaxedProduct: ${ hat_ instanceof Product}`);
console.log(`hat and TaxedProduct: ${ boots instanceof TaxedProduct}`);
console.log(`hat and TaxedProduct: ${ bootsProduct instanceof Product}`);

// Storing Data by Index
class ProductA {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new ProductA("Hat", 100);

let productArray = [];
let productSet = new Set();

for(let i=0; i<5; i++ ) {
    productArray.push(product);
    productSet.add(product);
}


console.log(`Product Array: ${JSON.stringify(productArray)}`)
console.log(`Array length: ${productArray.length}`)
console.log(`Product Set: ${productSet}`)
console.log(`Set Size: ${productSet.size}`)


// Using a Javascript Module
class ProductC {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let productC = new ProductA("Hat", 100)
let taxedPrice = calcTax(productC.price);
console.log(`Name: ${productC.name}, Taxed Price: ${taxedPrice}`);
