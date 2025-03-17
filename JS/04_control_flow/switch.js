// *************** SWITCH *************
// to check multiple consitions of one value like from 'if, else' example
// basic syntax of switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// break: by default where-ever your key gets matched with value, vaha se complete code executes, except default
// control flow breaks by 'break;'
// const month = 3
// // key: month ()
// switch (month) {
//     // it is like a lock and key where key works, code executes
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         // break;
//     case 4:
//         console.log("April");
//         break;
        
//     default:
//         console.log("default case match");
        
//         break;
// }

// type of value and key should be same
const month = "March"
switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
        
    default:
        console.log("default case match");
        
        break;
}