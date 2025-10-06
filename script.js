//your JS code here. If required.
let codes = document.querySelectorAll(".code")

codes.forEach((code,index)=> {

 code.value = code.value.replace(/[^0-9]/g, '');


 code.addEventListener("input", () => {
   if(code.value.length == 1){

    if(index  < codes.length-1){

        codes[index+1].focus();
        codes[index+1].classList.add("focused")
    }
   }
  
 })

 code.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (code.value.length > 0) {
      
      code.value = "";
    } else if (index > 0) {
      
      codes[index - 1].focus();
      codes[index - 1].classList.add("focused");
    }
  }
});


    code.addEventListener("blur", () => {

        code.classList.remove("focused")
    })
    

 })

 



