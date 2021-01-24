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
    //casting
    casting(inputChain) {
        this.input = this.input.replace(/÷/g, "/");
        this.input = this.input.replace(/x/g, "*");
        console.log(this.input);
        return this.input;
    }
}
//# sourceMappingURL=calculator.js.map