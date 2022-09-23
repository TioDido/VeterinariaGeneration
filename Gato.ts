import { Animais } from "./Animais";
export{gato, gato1, gato3}

class Gato extends Animais {

}
var gato = new Animais(`Franciele`, `John`, 1, true, true, `Gato: "SRD" (Sem raça definida)`, true);
var gato1 = new Animais(`Mario`, `Tidus`, 3, true, false,  `Gato: "Persian"`, false);
var gato3= new Animais(`Luigi`, `Yuna`, 0.5, true, true, `Gato: "Siamês"`, false);