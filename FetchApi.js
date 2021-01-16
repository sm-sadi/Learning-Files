
// using fetch  
fetch('http://localhost:3000/jobs')
.then( res => res.json() )
.then( data => myDisplay(data))
.catch( function(err){
  console.log(err);
});


// new way 

async function getRandomDog(){
    const response=  await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    const json =  await response.json();
    
     const mymap =json.map(function(itm){
       return  [
         setup =itm.setup,
         line = itm.punchline,  
     ]
    });
}

// another example 
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
  }
