"use strict";
var Calculator = /** @class */ (function () {
    function Calculator(input, output) {
        this.input = input;
        this.output = output;
    }
    Calculator.prototype.sumar = function () {
        throw new Error("Method not implemented.");
    };
    Calculator.prototype.restar = function () {
        throw new Error("Method not implemented.");
    };
    Calculator.prototype.dividir = function () {
        throw new Error("Method not implemented.");
    };
    Calculator.prototype.multiplicar = function () {
        throw new Error("Method not implemented.");
    };
    Calculator.prototype.potencia = function () {
        this.output = this.output ^ 2;
        return this.output;
    };
    //cating
    Calculator.prototype.casting = function () {
        this.input = this.input.replace(/÷/g, "/");
        this.input = this.input.replace(/x/g, "*");
        console.log(this.input);
    };
    return Calculator;
}());
var c = new Calculator('1÷5x1', 5);
console.log(c.casting());
