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
                var currentNumber = opLabel.innerHTML;
                console.log(element);
                var btnspan = element.lastElementChild;
                console.log(btnspan === null || btnspan === void 0 ? void 0 : btnspan.innerHTML);
                opLabel.innerHTML = currentNumber + (btnspan === null || btnspan === void 0 ? void 0 : btnspan.innerHTML);
            });
        });
    }
});
