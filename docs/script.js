let btns = document.querySelectorAll(".s");   // saare buttons
let display = document.querySelector(".display");
let historyBox = document.querySelector(".history");
let his_icone = document.querySelector(".his");
let show_icone = document.querySelector(".show_icone");
let btnBox = document.querySelector(".btn"); 
let dark_btn = document.querySelector(".dark_btn");
let body = document.querySelector("body");

let dark_value = true
dark_btn.addEventListener('click' , ()=>{
  if(dark_value){
    body.style.backgroundColor = "black";
    body.style.color = "white";
     dark_value = false;
  }else{
       body.style.backgroundColor = "white";
        body.style.color = "black";
        dark_value = true
  }

})

  let exp = "";
  let arr = [];

btns.forEach(button => {
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
        history_fn(exp , ans)
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
         history_fn(exp , ans)
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
his_icone.addEventListener('click', ()=> {
  historyBox.classList.remove("hidden");
  his_icone.classList.add("!hidden")
  show_icone.classList.remove("!hidden");
  btnBox.classList.add("hidden");        
});

function history_fn(exp , ans){
  console.log("fuction is call")
  console.log(exp);
  console.log(ans);
  

  
  let p = document.createElement("p");
   let p_ans = document.createElement("p");
   p.style.marginLeft = "10px"
   p_ans.style.marginLeft = "13px"
   p_ans.style.marginBottom = "13spx"
  p.innerText = exp;
  p_ans.innerText = ans;
  historyBox.appendChild(p);
  historyBox.appendChild(p_ans)
}

show_icone.addEventListener('click' , ()=>{
   historyBox.classList.add("hidden");
   btnBox.classList.remove("hidden");
   his_icone.classList.remove("!hidden")
   show_icone.classList.add("!hidden");
})
