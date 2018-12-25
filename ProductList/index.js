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
        const test = Storage.getProducts();
        const tt = test;
        tt.forEach((value)=>{
            UI.addProductToList(value);
        })
    }
    // add product static method
    static addProductToList(product) {
        const list = document.getElementById('product-list')
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>        
        <td>${product.description}</td>
        <td>${product.price}</td>  
        <td><a class="delete">X</a></td>  
        `;
        list.appendChild(row);
    }
    //delete product static method
    static deleteBook(el) {
        if(el.classList.contains('delete')){
            //<a>X</a> --> <td></td> --> <tr></tr>
            el.parentElement.parentElement.remove();
        }
    }
    // show alert on empty submit
    static showAlert(message,className){
        // <div class="alert-alert or success">some error or success message</div>
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        container.insertBefore(div,form);
        // gone after 2.5 seconds
        setTimeout(() => document.querySelector('.alert').remove(),2500);
    }
    // clear the form fields after submit
    static clearFields(){
        document.querySelector('#name').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#desc').value = '';
    }
}


// Store the data Class: handles storage
class Storage{
    //get Products
    static getProducts(){
        let products;
        if(localStorage.getItem('products')=== null){
            products = [];
        }else {
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }
    //add Products
    static addProducts(product) {
        const products = Storage.getProducts();
        products.push(product);
        localStorage.setItem('products',JSON.stringify(products));
    }
    //remove Products
    static removeProducts() {
        const products = Storage.getProducts();
        products.forEach((product,index)=> {
            if(product.price === price){
                product.splice(index, 1);
            }
        });
        localStorage.setItem('products',JSON.stringify(products));
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
    // validation
    if (name ==='' || price ==='' || desc===''){
        UI.showAlert('Please fill all the fields','error');
    }else{
        // instatiate product
        const product = new Product(name, price, desc);
        // add product to UI method call
        UI.addProductToList(product);
        // add product to localstorage
        Storage.addProducts(product);
        console.log(product);
        // show success message on adding a product
        UI.showAlert('Product Added','success');
        // clear form fields method call
        UI.clearFields();
        }    
});
// DOM EVENT: remove a product
document.querySelector('#product-list').addEventListener('click', e =>{
    // remove product ui method call
    UI.deleteBook(e.target);
    // remove product from the localstorage method call
    Storage.removeProducts(e.target.parentElement.previousElementSibling.textContent);
    // show success message on adding a product
    UI.showAlert('Book Removed', 'success');
})