let btns = document.querySelectorAll(".s");   // saare buttons
let display = document.querySelector(".display");
let historyBox = document.querySelector(".history");
let his_icone = document.querySelector(".his");
let show_icone = document.querySelector(".show_icone");
let btnBox = document.querySelector(".btn"); 
let dark_btn = document.querySelector(".dark_btn");
let body = document.querySelector("body");
let main_box = document.querySelector(".main_box");
let gr = document.querySelector(".gr");

let dark_value = true
dark_btn.addEventListener('click' , ()=>{
  if(dark_value){
    body.style.backgroundColor = "black";

    main_box.style.boxShadow = "0px 0px 20px white";

    btns.forEach(i => {
      i.style.backgroundColor = "#141314"
    });

    btns.forEach(i => {
      i.addEventListener('mouseover' , ()=>{
        i.style.backgroundColor = "#444444"
      })
      i.addEventListener("mouseout" , ()=>{
        i.style.backgroundColor = "#141314"
      })
    });

    gr.style.setProperty("background-color", "#00A300", "important");
    gr.addEventListener('mouseover' , ()=>{
     gr.style.setProperty("background-color", "#00A300", "important");
    })
    gr.addEventListener('mouseout' , ()=>{
      gr.style.setProperty("background-color", "#00A300", "important");
    })

    body.style.color = "white";
    dark_value = false;
  }else{

    main_box.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
    btns.forEach(i => {
      i.style.backgroundColor = "#F6F6F6"
    });
    
    btns.forEach(i => {
      i.addEventListener('mouseover' , ()=>{
        i.style.backgroundColor = "#c6c6c6"
      })
      i.addEventListener("mouseout" , ()=>{
        i.style.backgroundColor = "#F6F6F6"
      })
    });

    gr.style.setProperty("background-color", "#00A300", "important");
    gr.addEventListener('mouseover' , ()=>{
     gr.style.setProperty("background-color", "#00A300", "important");
    })
    gr.addEventListener('mouseout' , ()=>{
      gr.style.setProperty("background-color", "#00A300", "important");
    })
       body.style.backgroundColor = "white";
        body.style.color = "black";
        dark_value = true
  }

})

  let exp = "";
  let arr = [];
  let p_arr = [];
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
    else if(value == "%"){
      console.log(exp);
      let p_value = exp;
      p_arr.push(p_value)
      console.log(p_arr)

        if(exp.includes("*")){
           let parts = exp.split("*"); 
            let number = parts[1];
            let f_no = parts[0];
          console.log(number);

          let o_no = number/100;
          console.log(o_no);
          
          console.log(`${f_no}*${o_no}`);
          display.innerHTML = `${f_no}*${o_no}`;
          exp = `${f_no}*${o_no}`;
          console.log("*show");
          
          return
      }
      else if(exp.includes("+")){
        console.log("ok tested");
         let parts = exp.split("+"); 
          let number = parts[1];
           let f_no = parts[0];
            let o_no = number/100;
            let m = o_no*f_no;
            console.log(`${f_no}+${m}`);
            display.innerHTML = `${f_no}+${m}`;
            exp = `${f_no}+${m}`;
      }
      else if(exp.includes("-")){
        console.log("ok tested");
         let parts = exp.split("-"); 
          let number = parts[1];
           let f_no = parts[0];
            let o_no = number/100;
            let m = o_no*f_no;
            console.log(`${f_no}-${m}`);
            display.innerHTML = `${f_no}-${m}`;
            exp = `${f_no}-${m}`;
      }
      else{
         let last_v = Number(exp);
         let o_value = last_v/100;
         console.log(o_value);
         display.innerText = o_value;
         exp = o_value;

        
      }
      

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
    
    else if(key == "%"){
      console.log(exp);
      let p_value = exp;
      p_arr.push(p_value)
      console.log(p_arr)

        if(exp.includes("*")){
           let parts = exp.split("*"); 
            let number = parts[1];
            let f_no = parts[0];
          console.log(number);

          let o_no = number/100;
          console.log(o_no);
          
          console.log(`${f_no}*${o_no}`);
          display.innerHTML = `${f_no}*${o_no}`;
          exp = `${f_no}*${o_no}`;
          console.log("*show");
          
          return
      }
      else if(exp.includes("+")){
        console.log("ok tested");
         let parts = exp.split("+"); 
          let number = parts[1];
           let f_no = parts[0];
            let o_no = number/100;
            let m = o_no*f_no;
            console.log(`${f_no}+${m}`);
            display.innerHTML = `${f_no}+${m}`;
            exp = `${f_no}+${m}`;
      }
      else if(exp.includes("-")){
        console.log("ok tested");
         let parts = exp.split("-"); 
          let number = parts[1];
           let f_no = parts[0];
            let o_no = number/100;
            let m = o_no*f_no;
            console.log(`${f_no}-${m}`);
            display.innerHTML = `${f_no}-${m}`;
            exp = `${f_no}-${m}`;
      }
      else{
         let last_v = Number(exp);
         let o_value = last_v/100;
         console.log(o_value);
         display.innerText = o_value;
         exp = o_value;

        
      }
      

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
   p.style.marginLeft = "10px";
    p.style.fontWeight = "bold";       
    // p.style.color = "#333";   

  p_ans.style.marginLeft = "25px";
   p_ans.style.marginBottom = "13spx"
   p_ans.style.fontStyle = "italic";

  p.innerText = `• ${exp}`;
  p_ans.innerText = `Ans=${ans}`;
  historyBox.appendChild(p);
  historyBox.appendChild(p_ans)
}

show_icone.addEventListener('click' , ()=>{
   historyBox.classList.add("hidden");
   btnBox.classList.remove("hidden");
   his_icone.classList.remove("!hidden")
   show_icone.classList.add("!hidden");
})
