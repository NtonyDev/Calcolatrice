const displayOperazioni = document.getElementById("operazione");
const displayRisultato = document.getElementById("risultato");


const btns=document.querySelectorAll("button");
console.log(btns);
btns.forEach(function(item){
    item.addEventListener("click", function scrivi() {
        console.log(this.textContent);
        if(this.textContent=="AC") {
            console.log("AC");
            displayOperazioni.innerText="";
            displayRisultato.innerText="";
        }   else if (this.textContent=="⌫") {
            console.log("⌫");
            displayOperazioni.value=displayOperazioni.value.slice(0, -1);
        }   else {
            displayOperazioni.innerText=displayOperazioni.textContent+this.value;
        let calcola = new Promise(function(resolve,reject){
            setTimeout(()=> resolve (displayRisultato.innerText=math.evaluate(displayOperazioni.textContent)),100);
            //setTimeout(()=>reject(),100);
        });
        }
        
    });
})




