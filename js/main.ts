import { Calculator } from "./Entity/calculator.js";


var opLabel: any = document.getElementById('opLabel');
var ansLabel: any = document.getElementById('ansLabel');
const btn = document.querySelectorAll('.btn');
const myCalculator = new Calculator();

CatchInfoBtn();


/*catch the description value of button*/
function CatchInfoBtn(): void {
    btn.forEach(element => {
        element.addEventListener('click', function () {

            let currentOperation: string = opLabel.innerHTML;
            let clickedBtn = element.lastElementChild;

            if (!clickedBtn?.classList.contains('special')) {
                console.log(clickedBtn?.innerHTML);
                opLabel.innerHTML = currentOperation + clickedBtn?.innerHTML;
            } else if (clickedBtn.innerHTML == 'DEL') {
                currentOperation = opLabel.innerHTML;
               
                let lastChart = currentOperation[currentOperation.length - 1];
               
                    if(lastChart === 's' || lastChart == ' ')
                       opLabel.innerHTML = currentOperation.slice(0, currentOperation.length - 3);
                    else
                       opLabel.innerHTML = currentOperation.slice(0, currentOperation.length - 1);
  
           
            } else if (clickedBtn.innerHTML == 'AC') {
                opLabel.innerHTML = "";
                ansLabel.innerHTML = "";
           
            } else if (clickedBtn.innerHTML == '=') {

                /*This conditiol most be used in the case when the first character
                 in the operation is a simbol - or +*/
              
                 if(currentOperation[1] === '-' || currentOperation[1] === '+'){
                   //here try to delete the space betwen the fisrt operator and first operading
                   let firstSimbol = currentOperation.slice(0,2).trim();
                   let wordScraps = currentOperation.slice(2).trim();
                   currentOperation = firstSimbol.concat(wordScraps);
                }
                      console.log(myCalculator.ToPostFix(currentOperation));
                      let ansNumber:number = myCalculator.Evaluating();
                      !isNaN(ansNumber)? ansLabel.innerHTML =`${ansNumber}` : ansLabel.innerHTML =`Syntax Error`;

            }
        });
    });
}




