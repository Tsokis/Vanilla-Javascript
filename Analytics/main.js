//#########################################################################################################################
//#############################################------CONTROLERS------######################################################
//#########################################################################################################################


// ES5 style 

//Budget controller
var  budgetController = (function() {
    // data module for expenses and income
    // In order to have lot of objects(with data) --> constructor function or class(ES6 and later)
    var Exprense = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // store the incomes of user choice
        //on progress
    
    // data stucture 
    var data = {
        allItems: {
            exp:[],
            inc:[]
        },
      totals: {
          exp: 0,
          inc: 0
      }
    };

    return {
        //Budget controller methods
        addItem: function(type,des,val){
            var newItem, ID;
            // [1,2,3,4,5,6],  next ID = 7
            // ID = lastID + 1
            //create  a new id
            //when the array is empty id should be zero because of 'undefined error'
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id +1;

            } else {
                ID = 0;
            }
            
            
            //create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Exprense(ID, des, val);
            } else if(type === 'inc'){
                newItem = new Income(ID,des, val);
            }

            //push it into our data structure
            data.allItems[type].push(newItem);            

            //return the new element
            return newItem;
        },
        // test if grabing the data
        testing: function() {
            console.log(data);
        }
    }
})();


// ui controller
var UIController = (function() {
    //private variable
    var DomStrings = {
        //object storing all the strings
        inputType: '.add-type',
        inputDescription: '.add-description',
        inputValue: '.add-value',
        inputButton: '.btn-test',
        incomeContainer: '.income__list',
        expensesContainer: '.expense__list'
    };
     //public method  UI controller
     // want to call getInput and receive the three values[type,description,valuer] in order to do that, i turned it into an object instead of having 3 vars with selectors
     //return an object containing the three properties
     return {
         getInput: function(){
            return {
                type: document.querySelector(DomStrings.inputType).value , // inc or exp
                description: document.querySelector(DomStrings.inputDescription).value , // description
                value: document.querySelector(DomStrings.inputValue).value
            };           
         },
         addListItem: function (obj,type) {
             var html, newHtml, element;
             // create html string with default text
             if (type === 'inc') {
                 element = DomStrings.incomeContainer;
                html='<div class="test" id="income-%id%"><div class="item-description">%description%</div><div class="item-value">%value% €</div></div>'

             } else if ( type === 'exp'){
                 element = DomStrings.expensesContainer;
                html='<div class="test" id="expense-%id%"><div class="item-description">%description%</div><div class="item-value">%value% €</div></div>'

             }
              //replace the default text with some data

              newHtml = html.replace('%id%', obj.id);
              newHtml = newHtml.replace('%description%',obj.description);
              newHtml = newHtml.replace('%value%',obj.value);

             // insert the html into the DOM

             document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

         },
         // exposing the DOMStrings object to public
         getDomStrings: function() {
            return DomStrings;
         }
     };
})();




//MAIN/GLOBAL APP CONTROLLER
//passing as arguments the other 2 functions in order to know about them and update the ui
var controller = (function(bgtCtrl,UICtrl) {
    // function for event listeners
    var setupEventListeners = function() {
        var DOM = UIController.getDomStrings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrAddItem); 

        // add eventlistener to the global dom
        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13 || e.which === 13) {
                ctrAddItem();
            }
     
        });
    };    
    //  function to add new item
    var ctrAddItem = function() {
        var input, newItem;
        // 1 get the field input data 
        
         input = UIController.getInput();

        //2 add the item to the budget controller
         newItem = budgetController.addItem(input.type, input.description, input.value)

        //3 add the item to the UI
        UIController.addListItem(newItem, input.type);


        //4 Calcute the budget
            //on progress

        //5 Display the budget on the UI 
            //on progress       
    }; 
    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    };   
})(budgetController, UIController);

controller.init(); //calling init