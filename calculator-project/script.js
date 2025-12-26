// //Dom elements
// let input = document.querySelector('.input')
// let button = document.querySelectorAll("button")


// // handle input
//   function handleInput(value){

//       if (value === "AC") {
//           input.value = ""
//       } else if (value === "DE") {
//           input.value = input.value.slice(0, -1)
//       } else if (value === "=") {
//           try {
//               input.value = eval(input.value.replace("X", "*"));
//           }
//           catch {
//               input.value = "Error"
//           }
//       } else {
    
//           input.value += value;
//       }

//   }    
// // 3️⃣ Button clicks
// button.forEach((ele) => {
//   ele.addEventListener('click', function (e) {
//     let value = e.target.innerText;
//     handleInput(value);
//   });
// });

// // 4️⃣ Keyboard support
// document.addEventListener('keydown', (e) => {
//   if (e.key === "Escape") {
//     handleInput("AC");
//   } else if (e.key === "Backspace") {
//     handleInput("DE");
//   } else if (e.key === "Enter") {
//     handleInput("=");
//   } else {
//     handleInput(e.key);
//   }
// });



// Dom elements

let input = document.querySelector('.input')
let btn= document.querySelectorAll("button")

function handleInput(value){
    if(value==="AC"){
        input.value=""
    }else if(value==="DE"){
        input.value=input.value.slice(0,-1)
    }else if(value==="="){
        try{
            input.value= eval(input.value.replace("X","*"))
        }
        catch{
            input.value="Error"
        }
    }else{
        input.value+=value
    }
}

//button clicks

btn.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        let value=e.target.innerText;
        handleInput(value)
    })
});

//Keyboard support
 document.addEventListener('keydown',(e)=>{
    if(e.key==="Escape"){
        handleInput("AC")
    }else if(e.key==="Backspace"){
        handleInput("DE")
    }else if(e.key=== "Enter"){
        handleInput("=")
    }else{
        handleInput(e.key)
        
    }
 })