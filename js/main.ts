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
                let currentNumber:string = opLabel.innerHTML;
                console.log(element);
                let btnspan = element.lastElementChild;
                console.log(btnspan?.innerHTML);
                opLabel.innerHTML = currentNumber + btnspan?.innerHTML;
            });
        });
    }
});

