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
                opLabel.innerHTML = currentOperation.slice(0, currentOperation.length - 1);
            } else if (clickedBtn.innerHTML == 'AC') {
                opLabel.innerHTML = "";
                ansLabel.innerHTML = "";
            } else if (clickedBtn.innerHTML == '=') {
                
                    console.log(myCalculator.ToPostFix(currentOperation));
                    let ansNumber:number = myCalculator.Evaluating();
                   
                    !isNaN(ansNumber)? ansLabel.innerHTML =`${ansNumber}` : ansLabel.innerHTML =`Syntax Error`;
                    
               
                
            }
        });
    });
}




