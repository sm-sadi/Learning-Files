// here is simple explanation for -
//  1. js class 2. js constructor 3. prototype 4. method chaining 
// 5. class inheritance  6. prototype inheritance 
//


// simple object 
const userObj = {
    user : "userName",
    email : "gf@gmail.com",
    login   : function(){
        console.log(this.user);
    }
}

// class and contructor  // it creates an empty objest 
class User {
    constructor(name , email){
        this.name = name   
        this.email = email
        this.score = 0;
    }
    // to create method we need to create a seperate function 
    login(){
        console.log(` ${this.name} just login`);
    }
    logOut(){
        console.log(` ${this.name} just logged out`);
    }
    updateScore(){
        this.score ++;
        console.log(this.name, "has the socre of", this.score);
        return this;  // returning the main ojbject So that we can use chaining with this method
    }

}


// using  class
let user1 = new User("sadi" , "sdss@gmail.com") // 'this' -- new creates and epmty object and refers to the user object 
let user2 = new User("zaki" , "sddfs@gmail.com") 
let user3 = new User("saj" , "sddfs@gmail.com") 
console.log(user2.email)

//  calling the methed of the user cacheslass 
user1.login()
user2.updateScore();


// method chaining 
user2.updateScore().updateScore().login()


// Class inheritance == which is basically a class inside a class 

class Admin extends User{
        deleteUser(user){
            users =users.filter(function(itm){
                    return itm.name != user.name;
            })

        }
}

let admin1 = new Admin ("tom" , "jerry@gmail.com")

let users = [user1 , user2 ,user3, admin1]

admin1.deleteUser(user3);

console.log(users);


// prototype 
function CreatingConstructor (name , email){ // this is the constructor function
    this.name = name; 
    this.email = email;
}

CreatingConstructor.prototype.loginto = function(){  // syntax to declare prototype 
     console.log(this.name) 
}

let user6 = new CreatingConstructor ("sadii", "email@email.com")
user6.loginto();


 // prototype inheritance

 function AdminAccess (...args){ // ... represnt the prams given in this funtion which is an array 
    // console.log(args)
    //CreatingConstructor.apply(this , [ arg1 , arg2]) // this refer to the contructor finction 
    CreatingConstructor.apply(this , args)
    this.role = " super admin "
}

 let adminUser = new AdminAccess("admin" , "admin@email.com");

console.log(adminUser)

AdminAccess.prototype = Object.create(CreatingConstructor.prototype) // creating prototype 