'use strict';
window.addEventListener('load', function (e) {
    //globals variables
    var opLabel = document.getElementById('opLabel');
    var btn = document.querySelectorAll('.btn');
    //catching the number function
    CatchInfoBtn();
    function CatchInfoBtn() {
        btn.forEach(function (element) {
            console.log(element);
            element.addEventListener('click', function () {
                var currentOperation = opLabel.innerHTML;
                console.log(element);
                var currentBtn = element.lastElementChild;
                if (!(currentBtn === null || currentBtn === void 0 ? void 0 : currentBtn.classList.contains('special'))) {
                    console.log(currentBtn === null || currentBtn === void 0 ? void 0 : currentBtn.innerHTML);
                    opLabel.innerHTML = currentOperation + (currentBtn === null || currentBtn === void 0 ? void 0 : currentBtn.innerHTML);
                }
                else if (currentBtn.innerHTML == 'DEL') {
                    currentOperation = opLabel.innerHTML;
                    opLabel.innerHTML = currentOperation.slice(0, currentOperation.length - 1);
                }
                else if (currentBtn.innerHTML == 'AC') {
                    opLabel.innerHTML = "";
                }
            });
        });
    }
});
