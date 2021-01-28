export class Calculator {
    constructor() {
        //initializing the map
        this.precedent = new Map();
        this.precedent.set('*', 3);
        this.precedent.set('/', 3);
        this.precedent.set('+', 2);
        this.precedent.set('-', 2);
        this.precedent.set('(', 1);
        this.operatorPile = [];
        this.postFix = [];
        this.inputs = [];
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
        throw new Error("Method not implemented.");
    }
    cleanPostFix() {
        this.postFix.splice(0, this.postFix.length);
    }
    cleanInputs() {
        this.inputs.splice(0, this.inputs.length);
    }
    //transform ÷ => /  and  x => *
    casting(inputChain) {
        //insert the actual input into inputs array
        this.inputs.push(inputChain);
        let arrayCasted;
        inputChain = inputChain.replace(/÷/g, "/");
        inputChain = inputChain.replace(/x/g, "*");
        arrayCasted = Array.from(inputChain);
        return arrayCasted;
    }
    //Infix To postfix algorithm
    ToPostFix(infixInput) {
        let mySimbolChain;
        mySimbolChain = this.casting(infixInput);
        this.cleanPostFix();
        mySimbolChain.forEach((simbol) => {
            if (this.precedent.get(simbol) == undefined) {
                this.postFix.push(simbol);
            }
            else if (simbol == '(') {
                this.operatorPile.push(simbol);
            }
            else if (simbol == ')') {
                let lastSimbol = this.operatorPile.pop();
                while (lastSimbol != '(') {
                    this.postFix.push(lastSimbol);
                    lastSimbol = this.operatorPile.pop();
                }
            }
            else {
                //getting the last simbol in the text chain without delete or modify
                let InspectLastSimbol = this.operatorPile[this.operatorPile.length - 1];
                while (this.operatorPile.length != 0 && (this.precedent.get(InspectLastSimbol) >= this.precedent.get(simbol)))
                    this.postFix.push(this.operatorPile.pop());
                this.operatorPile.push(simbol);
            }
        });
        while (this.operatorPile.length != 0) {
            this.postFix.push(this.operatorPile.pop());
        }
        return this.postFix;
    }
}
//# sourceMappingURL=calculator.js.map