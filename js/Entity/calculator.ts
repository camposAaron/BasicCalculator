export class Calculator implements ICalculate{
    //Infixs inputs chain
    private inputs:string[];
    //pile
    private operatorPile:string[];
    //postFixed chain
    private  postFix:string[];
    //precedent dictionary
    private precedent: Map<string, any>;

    constructor(){
        //initializing the map
        this.precedent =  new Map<string, any>();
        this.precedent.set('*',3);
        this.precedent.set('/',3);
        this.precedent.set('+',2);
        this.precedent.set('-',2);
        this.precedent.set('(',1);

        this.operatorPile = [];
        this.postFix = [];
        this.inputs = [];
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
        throw new Error("Method not implemented.");
     }

     cleanPostFix():void{
         this.postFix.splice(0,  this.postFix.length);
     }

     cleanInputs():void{
         this.inputs.splice(0,this.inputs.length);
     }

     //transform ÷ => /  and  x => *
    private casting(inputChain:string):string[]{
        //insert the actual input into inputs array
        this.inputs.push(inputChain);
        
        let arrayCasted:string[];
        inputChain = inputChain.replace(/÷/g,"/");
        inputChain = inputChain.replace(/x/g,"*");
        arrayCasted =  Array.from(inputChain);
       
        return arrayCasted;
     }

   
     //Infix To postfix algorithm
     ToPostFix(infixInput:string){
      
       let mySimbolChain:string[];
       mySimbolChain = this.casting(infixInput);
       this.cleanPostFix();

        mySimbolChain.forEach((simbol)=>{
            if(this.precedent.get(simbol) == undefined){
                this.postFix.push(simbol);
            }else if(simbol == '('){
                this.operatorPile.push(simbol);
            }else if(simbol == ')'){
                let lastSimbol:string = this.operatorPile.pop()!;
                while(lastSimbol != '('){
                    this.postFix.push(lastSimbol);
                    lastSimbol = this.operatorPile.pop()!;
                }
            }else{
               //getting the last simbol in the text chain without delete or modify
               let InspectLastSimbol:string = this.operatorPile[this.operatorPile.length - 1];

               while(this.operatorPile.length != 0 &&  (this.precedent.get(InspectLastSimbol) >= this.precedent.get(simbol)))
                    this.postFix.push(this.operatorPile.pop()!);
                
                this.operatorPile.push(simbol);
            }
        });
  
        while(this.operatorPile.length != 0){
            this.postFix.push(this.operatorPile.pop()!);
        }
        return this.postFix;

    }
}
