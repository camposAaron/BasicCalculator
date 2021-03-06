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
        this.operatorPile2 = [];
        this.previous = 0;
    }
    DoAritmethitc(simbol, operatingLeft, operatingRight) {
        switch (simbol) {
            case '*':
                return operatingLeft * operatingRight;
                break;
            case '/':
                return operatingLeft / operatingRight;
                break;
            case '+':
                return operatingLeft + operatingRight;
                break;
            case '-':
                return operatingLeft - operatingRight;
                break;
            default:
                return -1;
                break;
        }
    }
    cleanPostFix() {
        this.postFix.splice(0, this.postFix.length);
    }
    cleanInputs() {
        this.inputs.splice(0, this.inputs.length);
    }
    cleanOperationPile() {
        this.operatorPile.splice(0, this.inputs.length);
    }
    //transform ÷ => /  ,  x => * and Ans to previous number
    casting(inputChain) {
        //insert the actual input into inputs array
        let arrayCasted;
        this.inputs.push(inputChain);
        inputChain = inputChain.replace(/÷/g, "/");
        inputChain = inputChain.replace(/x/g, "*");
        if (inputChain.includes('Ans'))
            inputChain = inputChain.replace(/Ans/g, ''.concat(this.previous.toString()));
        arrayCasted = inputChain.split(' ');
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
    //Evaluating PostFix chain
    Evaluating() {
        let result;
        this.cleanOperationPile();
        this.postFix.forEach((simbol) => {
            if (this.precedent.get(simbol) == undefined) {
                this.operatorPile2.push(parseFloat(simbol));
            }
            else {
                let operating2 = this.operatorPile2.pop();
                let operating1 = this.operatorPile2.pop();
                let result = this.DoAritmethitc(simbol, operating1, operating2);
                this.operatorPile2.push(result);
            }
        });
        result = this.operatorPile2.pop();
        if (!isNaN(result)) {
            this.previous = result;
            return result;
        }
        else
            return -1;
    }
}
//# sourceMappingURL=calculator.js.map