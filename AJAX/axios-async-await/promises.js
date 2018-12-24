const postArticles = [
    {title:'Javascript',body:'Javascript and the modern frameworks',date:'25/3/16',id:1},
    {title:'Python',body:'Building dynamic web apps with django',date:'25/6/18',id:3},
    {title:'C++',body:'error error error',date:'25/1/17',id:2}
];

// //map: value,index,array
// postArticles.map((value,index,arr) => {
//     console.log(`value: ${value.id}`);
//     console.log(`index: ${index}`);
//     console.log(arr);
    
// });

function getPostArticles(){
    setTimeout(()=>{
        let output = '';
        postArticles.forEach(posts => {
            output+= `<li>${posts.body}</li>`
        });
        document.body.innerHTML = output;
    },2000);
}

//getPostArticles();

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            postArticles.push(post)
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Opps something went wrong!');
            }
        },3000);        
    });   
}

createPost({title:'Java',body:'Java a fully featured object oriented programming language',date:'2/12/18',id:4})
.then(getPostArticles);