//'use strict';

class Employee {
    constructor(firstName, lastName, address, email){
       
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        
    }
    
   info(){
       const output = document.getElementById('test');
     //const className= document.querySelector('.card');
     output.setAttribute('class','card');
     output.innerHTML += `<p>Employee ${this.firstName}                         
                        with last name ${this.lastName}
                        has this  <em>${this.address}</em> address
                        and this <b>${this.email}</b> email address.</p><br>`;
    output.setAttribute('class','card');

   };

  

}

const emp1= new Employee('Nik','Smith','test street 5','test@email.com');
const emp2= new Employee('John','Doe','lorem street 18','testing@email.com');
const emp3= new Employee('Stefanie','Montel','original street 72','stef@email.com');

emp1.info();
emp2.info();
emp3.info();
