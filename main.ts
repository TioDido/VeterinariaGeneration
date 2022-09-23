import { Animais} from "./Animais";
import { gato1, gato3, gato } from "./Gato";
import{cachorro } from "./Cachorro";
import { cavalo } from "./Cavalo";

import PromptSync from "prompt-sync";
import { coelho, coelho2 } from "./Coelho";
import { preguica } from "./Preguica"
import { passaro, passaro2 } from "./Passaro";



class main extends Animais  {
    
}

while (true){
console.log(`\n---------Menu do Banco de Dados da veterinária Generation---------`);
console.log(`\nInforme, por favor, o tipo de animal que deseja puxar as fichas de cadastro.`)
console.log(`[0]-Sair`)
console.log(`[1]-Cachorro`)
console.log(`[2]-Cavalo`)
console.log(`[3]-Gato`)
console.log(`[4]-Coelho`)
console.log(`[5]-Preguiça`)
console.log(`[6]-Passaro`)
const prompt = PromptSync();
let opcao = Number(prompt("Informe uma opção...:"))
console.log(opcao)
if (opcao==0){
    console.log("Você optou por sair.")
    break;
}
switch (opcao){

    case 1: cachorro.caracteristicadoAnimal();
        break;

        case 2: cavalo.caracteristicadoAnimal();
        break;

        case 3: gato.caracteristicadoAnimal();
        gato1.caracteristicadoAnimal();
        gato3.caracteristicadoAnimal();
        break;

        case 4: coelho.caracteristicadoAnimal();
        coelho2.caracteristicadoAnimal();
        break;

        case 5: preguica.caracteristicadoAnimal();
        break;

        case 6: passaro.caracteristicadoAnimal();
        passaro2.caracteristicadoAnimal();
        break;
            default: console.log(`Erro`)
}
}










