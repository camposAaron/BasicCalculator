export class Calculator implements ICalculate{
    
    private input:string = "";
    private output:number = 0;
    
    constructor(){
    }

     sumar(): number {
         throw new Error("Method not implemented.");
     }
     restar(): number {
         throw new Error("Method not implemented.");
     }
     dividir(): number {
         throw new Error("Method not implemented.");
     }
     multiplicar(): number {
         throw new Error("Method not implemented.");
     }
     potencia(): number {
        this.output = this.output ^ 2;
        return this.output;
     }

     //transform ÷ => /  and  x => *
     casting(inputChain:string):string{
        this.input = inputChain.replace(/÷/g,"/");
        this.input = this.input.replace(/x/g,"*");
        console.log(this.input);
        return this.input;
     }

     //Infixed To postFixed
     Execute(){
        
     }



    
}

