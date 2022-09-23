

export class Animais {
    tutor_Animal:string;
    nome_Animais: string;
    idade_Animais: number;
    possui_Som: boolean;
    consegue_Correr: boolean;
    especie_Animal:string;
    genero_Animal: boolean;
    
    




    constructor(tutor_Animal:string, nome_Animais:string, idade_Animais:number, possui_Som:boolean, consegue_Correr:boolean, especie_Animal:string, genero_Animal: boolean) {
        this.tutor_Animal =tutor_Animal;
        this.nome_Animais = nome_Animais;
        this.idade_Animais = idade_Animais;
        this.possui_Som = possui_Som;
        this.consegue_Correr = consegue_Correr;
        this.especie_Animal = especie_Animal;
        this.genero_Animal = genero_Animal;

    }

    caracteristicadoAnimal() {
        console.log("------------------------------------------------------------------");
        console.log (`O tutor do animal...: ${this.tutor_Animal}`)
        console.log (`O nome do animal é...: ${this.nome_Animais}`)
        console.log(`A idade do animal é...: ${this.idade_Animais}`);
        if (this.idade_Animais < 5){
            console.log(`O ${this.nome_Animais} é um filhote. Ele possui ${this.idade_Animais} ano(s). `);
        } else if (this.idade_Animais >=6 && this.idade_Animais <= 10) {
            console.log(`O ${this.nome_Animais} é um animal adulto. Ele possui ${this.idade_Animais} ano(s)`);
        } else {
            console.log(`O ${this.nome_Animais} é sênior. Ele tem ${this.idade_Animais} ano(s).`);
        }
        console.log(`Ele emite som...: ${this.possui_Som}`)
        if (this.possui_Som == true){
            console.log(`O animal possui som`);
        } else {
            console.log(`O animal não possui som`)
        }
        console.log(`Ele corre...: ${this.consegue_Correr}`);
        if (this,this.consegue_Correr == true){
            console.log(`O ${this.nome_Animais} consegue correr.`);
        } else {
            console.log(`O ${this.nome_Animais} não consegue correr`)
        }
        console.log(`A especie do animal é...: ${this.especie_Animal}`)
        console.log("\n")
        console.log(`ATENÇÃO! Se no console aparecer [true] o genero do pet é Masculino, caso o contrario, feminimo`)
        console.log (`O genero do animal é...: ${this.genero_Animal}`)
        if (this.genero_Animal == true){
            console.log(`O genero do animal é Macho`)
        } else {
            console.log(`O genero do animal é Fêmea`)
        }
        console.log("------------------------------------------------------------------");
        
    
    }

}


    
