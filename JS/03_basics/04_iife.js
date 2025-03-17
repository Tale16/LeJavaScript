// Immediately Invoked Function Expression (IIFE) 
// - immediate execution of the function
// - sometimes file wants asap database connection as it starts
// - to avoid global scope pollution
// * sometimes pollution cause by global scope is problematic so to avoid pollution os global scopes declation we use IIFE

(function chai(){

    //this is a named IIFE as this has name

    console.log(`DB CONNECTED`)
    // this has invoked context but doesnt know where to stop....
    // to end contect we add ';' we can say "and kar diya"
    // ';' is use when we declare more than one IIFE

})();


// define
// 1st () is for function defination and 2nd () is for execution
// ()()

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()


// same example with arguments 
( (name) => {

    // this is a same IIFE as it has no name

    console.log(`DB CONNECTED TWO ${name}`);
})("Chinmayee")