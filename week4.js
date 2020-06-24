//1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’ 

function createFullName(firstName,lastName){
    console.log (`${firstName}${lastName}`);
}

createFullName("Claudia","Escutia")

//2.Write the same function as above as an arrow function with a different name. 

let createFullName2 = (firstName, lastName) => console.log(`${firstName}${lastName}`)

createFullName2("Claudia","Escutia")

//3.Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback. 

    //a. Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout. 

    setTimeout(function(){alert ("Time is up!");},5000);

    //Arrow
    setTimeout(() => alert('Time is up!'), 5000)

    //b.Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval. 
    
    let AskAreWeThereYet = () => setInterval(() => alert('Are We There Yet?'), 2000)

    AskAreWeThereYet()

//4.In this step you are going to write a function that takes a callback to better understand how callbacks work. 

    //a.Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array, and a callback that will process the sliced element. 
    //b.Inside the function, use the first two parameters to splice an element from the array. 
    //c.Call the callback function and pass the spliced value into it. 
    //d.Outside of your function, create an array of strings, call processSplicedValue, and pass the array, an index number, and console.log into it. For example: processSplicedValue(arrayName, 2, console.log); 
    //e.Call the processSplicedValue function again but this time pass in the alert method instead of console.log. 
    //f.Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value. 
    //g.Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name. 

    function processSplicedValue(array, indexToSpliceAt, callback) {
        callback(array.splice(indexToSpliceAt))
      }
      
      var strings = ["asdf", "hello", "helloooooo"]
      
      processSplicedValue(strings, 1, console.log)
      
      processSplicedValue(strings, 1, alert)

      processSplicedValue(strings, 1, splicedValue => {
        alert(splicedValue)
    })
      processSplicedValue(strings, 1, Greetings => {
        alert(Greetings + " Welcome Again!")
    })

    