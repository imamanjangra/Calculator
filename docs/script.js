let btn = document.querySelectorAll(".s");
let display = document.querySelector(".display");
  let exp = "";
  let arr = [];
btn.forEach(button => {
  button.addEventListener('click' , ()=>{
    let value = button.value;
    console.log(value);
     if(exp == ""){
      if(value == "+" || value == "-" || value == "*" || value == "%" || value == "/"   || value == "="){
        alert("Entre number first")
           return;
      }
    }
    if(value == "c"){
       if(exp == ""){
        alert("Entre number first")
     }
      exp = " ";
      display.innerText = " ";
    } 
   
    else if(value == "Backspace"){
      console.log(exp);
      if(exp == ""){
       
            return;
     }else{
     let arr = exp.split("").map(ch => (isNaN(ch) ? ch : Number(ch)));
      console.log(arr);
      arr.pop();
      console.log(arr);  
      exp = arr.join("");
      console.log(exp);
      display.innerText = exp;
       }
    }
    else if(value == "="){
      if(exp != " "){
        let ans = eval(exp);
        display.innerText = ans;
      }
      else{
        alert("Entre a value ");
            return;
      }

    }
    else{
      exp = exp + value;
      display.innerText = exp;
    }
  })
});


// for keybord
document.addEventListener('keydown', (e)=>{
    let key = e.key;
    console.log(key);
    if(key == "+" || key == "-" || key == "*" || key == "%" || key == "/"|| key == "Enter" || key == "c"  || key == "%" || key == "."  || key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9" || key == "0" || key == "00" || key == "=" || key == "Entre" || key == "Backspace"  || key == "="){
      run();
    }else{
     
      return;
    }
function run(){


     if(exp == ""){
      if(key == "+" || key == "-" || key == "*" || key == "%" || key == "/"   || key == "="){
        alert("Entre number first ")
           return;
      }}

   if(key == "c"){
       if(exp == ""){
        alert("Entre number first")
     }
      exp = " ";
      display.innerText = " ";
    } 

    else if(key == "Backspace"){
      if(exp == ""){
        
              return;
      }
      else{
          let arr = exp.split("").map(ch => (isNaN(ch) ? ch : Number(ch)));
          console.log(arr);
          arr.pop();
          console.log(arr);  
          exp = arr.join("");
          console.log(exp);
          display.innerText = exp;
        }
    }

    else if(key == "=" || key == "Enter"){
      if(exp != " "){
        let ans = eval(exp);
        display.innerText = ans;
      }
      else{
        alert("Entre a value ");
            return;
      }

    }
  

    else{
      exp = exp + key;
      display.innerText = exp;
    }
   }

})