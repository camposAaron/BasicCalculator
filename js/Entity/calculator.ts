 class Calculator implements ICalculate{
    
    private input:string;
    private output:number;
    
    constructor(input:string,output:number){
        this.input = input;
        this.output = output;
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

     //casting
     casting(){
        this.input = this.input.replace(/÷/g,"/");
        this.input = this.input.replace(/x/g,"*");
        console.log(this.input);
     }

     Calculator():string{
       var cadena = this.input;
       var index1:number, index2:number;
       var salida:number;
      
        if(cadena.includes('/')){
             index1 = cadena.indexOf('/');
        }

        if(cadena.includes('*')){
            index2 = cadena.indexOf('*');
        }


     }
}

let c = new Calculator('1÷5x1',5);
console.log(c.casting())