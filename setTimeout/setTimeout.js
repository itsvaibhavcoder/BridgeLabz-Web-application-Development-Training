// Time, tide and JavaScript wait for none.
// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JavaScript");
// }
// x();
// Output:
// Namaste Javascript
// 1 after waiting 3 seconds

// Q: Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question

//We assume this has a simple approach as below
// function x(){
//     for(var i=0; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

function x() {
    for(let i = 1; i<=5; i++){
        setTimeout(function() {
        console.log(i);
        }, i*1000);
    }
    console.log("Namaste Javascript");
}
x();

//But what if interviewer ask us to implement using var?
// put the setT function inside new function close()
// everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!

function x() {
    for(var i = 1; i<=5; i++){
    function close(i) {
        setTimeout(function() {
        console.log(i);
        }, i*1000);
    }
    close(i); 
    }
    console.log("Namaste Javascript");
}
x();