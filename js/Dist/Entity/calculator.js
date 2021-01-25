export class Calculator {
    constructor() {
        this.input = "";
        this.output = 0;
    }
    sumar() {
        throw new Error("Method not implemented.");
    }
    restar() {
        throw new Error("Method not implemented.");
    }
    dividir() {
        throw new Error("Method not implemented.");
    }
    multiplicar() {
        throw new Error("Method not implemented.");
    }
    potencia() {
        this.output = this.output ^ 2;
        return this.output;
    }
    //transform ÷ => /  and  x => *
    casting(inputChain) {
        this.input = inputChain.replace(/÷/g, "/");
        this.input = this.input.replace(/x/g, "*");
        console.log(this.input);
        return this.input;
    }
    //Infixed To postFixed
    Execute() {
    }
}
//# sourceMappingURL=calculator.js.map