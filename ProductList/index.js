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
            UI.addProductToList(value);
        })
    }
    static addProductToList(product) {
        const list = document.getElementById('product-list')
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>  
        <td><a class="delete">X</a></td>  
        `;
        list.appendChild(row);
    }
    static deleteBook(el) {
        if(el.classList.contains('delete')){
            //<a>X</a> --> <td></td> --> <tr></tr>
            el.parentElement.parentElement.remove();
        }
    }
    static clearFields(){
        document.querySelector('#name').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#desc').value = '';
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
    // add product to UI
    UI.addProductToList(product);
    console.log(product);
    // clear form fields
    UI.clearFields();
});

// DOM EVENT: remove a product
document.querySelector('#product-list').addEventListener('click', e =>{
    UI.deleteBook(e.target);
})