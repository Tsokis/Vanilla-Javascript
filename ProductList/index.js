// Product class: blueprint for a product
class Product {
    constructor(name,price,description){
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

// UI class: handles ui
class UI {
    // all the methods are static in order not to
    // instatiate our object everytime we need a method
    static displayProducts(){
        //from local storage
        const test = [{name:'hehh',price:22,description:'hahahahahahahahahhahahahahaha'}]
        const tt = test;
        tt.forEach((value)=>{
            UI.addBookToList(value);
        })
    }
    static addBookToList(product) {
        const list = document.getElementById('product-list')
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>  
        <td><a>X</a></td>  
        `;
        list.appendChild(row);
    }
}
// DOM Event : display products
document.addEventListener('DOMContentLoaded',UI.displayProducts)

// DOM Event: add a product
document.querySelector('#form').addEventListener('submit',(e)=>{
    e.preventDefault();
    //get form values
    const name  = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const desc = document.querySelector('#desc').value;
    // instatiate product
    const product = new Product(name,price,desc);
    console.log(product);
});
