import { Calculator } from "./Entity/calculator.js";
var opLabel = document.getElementById('opLabel');
var ansLabel = document.getElementById('ansLabel');
const btn = document.querySelectorAll('.btn');
const myCalculator = new Calculator();
CatchInfoBtn();
/*catch the description value of button*/
function CatchInfoBtn() {
    btn.forEach(element => {
        element.addEventListener('click', function () {
            let currentOperation = opLabel.innerHTML;
            let clickedBtn = element.lastElementChild;
            if (!(clickedBtn === null || clickedBtn === void 0 ? void 0 : clickedBtn.classList.contains('special'))) {
                console.log(clickedBtn === null || clickedBtn === void 0 ? void 0 : clickedBtn.innerHTML);
                opLabel.innerHTML = currentOperation + (clickedBtn === null || clickedBtn === void 0 ? void 0 : clickedBtn.innerHTML);
            }
            else if (clickedBtn.innerHTML == 'DEL') {
                currentOperation = opLabel.innerHTML;
                let lastChart = currentOperation[currentOperation.length - 1];
                if (lastChart === 's' || lastChart == ' ')
                    opLabel.innerHTML = currentOperation.slice(0, currentOperation.length - 3);
                else
                    opLabel.innerHTML = currentOperation.slice(0, currentOperation.length - 1);
            }
            else if (clickedBtn.innerHTML == 'AC') {
                opLabel.innerHTML = "";
                ansLabel.innerHTML = "";
            }
            else if (clickedBtn.innerHTML == '=') {
                console.log(myCalculator.ToPostFix(currentOperation));
                let ansNumber = myCalculator.Evaluating();
                !isNaN(ansNumber) ? ansLabel.innerHTML = `${ansNumber}` : ansLabel.innerHTML = `Syntax Error`;
            }
        });
    });
}
//# sourceMappingURL=main.js.map