// singletone
// declare sinleton with the help of construction

// singleton object
// both methods give same output
// const tinderUser = new Object();
// non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// declare object in object
// can be nested 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Chinmayee",
            lastName: "Tale"
        }
    }
}
// return in nested form
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);


// print as array in array like wise object in object
const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "a", 4: "b",}

// { obj1: { '1': 'a', '2': 'b' }), obj2: { '3': 'a', '4': 'b' } }
// const obj3 = {obj1, obj2}

// expected aligned values 
// if there are more arrays then this empty array'{}' is necessary
// const obj3 = Object.assign({} ,obj1,obj2)


// most correct way is spread 
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// how values come from database

const users = [ //array
    // object
    {
        id: 1,
        email: "c@gmail.com"

    },
    {
        id: 1,
        email: "c@gmail.com"

    },
    {
        id: 1,
        email: "c@gmail.com"

    },
    {
        id: 1,
        email: "c@gmail.com"

    }
]

users[1].email
// console.log(tinderUser);
// data type of output is array
//  we can apply multiple loop on array
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// to know property of specific value 
// without properties code can crash
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// ***********************destructure***************************


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "chinmayee"

}
// deconstruct courseInstructor to instructor (short)
const {courseInstructor: instructor} = course

console.log(instructor)

// about react
// to avoid constant huge name typing we can deconstruct  'props.company' by {company} in react
// const navbar = ({company})=> {

// }
// navbar(company = "hitesh")


// what is api : how we write values came from backend 
// these values comes in JSON structure mostly
// object has an name but JSON doesnt 
// JASON acts as an object 
// {
//     name: "chinmayee",
//     coursename: "js in hindi",
//     prise: "free"
// }



// api in array formate in which there are multiple objects
// to read api we use JASON formatter online website 
// JSON is a JS orianted notation
[
    {},
    {},
    {}
]