const products = [];

module.exports = class Product {

    constructor(title){
        this.title = title;
    }
    
    //adding a new product
    save(){
        products.push(this);
    }
    
    //fetching all products
    static fetchAll(){
        return products;
    }
}


