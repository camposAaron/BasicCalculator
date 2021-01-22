'use strict'
window.addEventListener('load', function(e){
    
   //globals variables
   var opLabel:any = document.getElementById('opLabel');
   const btn =  document.querySelectorAll('.btn');
   

   //catching the number function
   CatchInfoBtn();

   
   function CatchInfoBtn():void{
        btn.forEach(element => {
          console.log(element);
            element.addEventListener('click',function(){
            
                let currentOperation:string = opLabel.innerHTML;
                console.log(element);
                let currentBtn = element.lastElementChild;

                if(!currentBtn?.classList.contains('special')){
                    console.log(currentBtn?.innerHTML);
                    opLabel.innerHTML = currentOperation + currentBtn?.innerHTML;
                }else if(currentBtn.innerHTML == 'DEL'){
                    currentOperation=  opLabel.innerHTML;
                    opLabel.innerHTML =  currentOperation.slice(0,currentOperation.length - 1);
                }else if(currentBtn.innerHTML == 'AC'){
                    opLabel.innerHTML =  "";
                }
               
            });
        });
    }
});

