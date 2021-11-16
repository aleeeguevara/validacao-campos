import { validarInput } from "./validar.js";

window.onload = () => {  // quando a tela é carregada
    const inputs= document.querySelectorAll("input");

    inputs.forEach(input =>{
        if(input.dataset.tipo == "preco"){ //mascara monetaria que ira formatar o que o usuario digitar
            SimpleMaskMoney.setMask(input, {
                allowNegative: false,
                negativeSignAfter: false,
                prefix: 'R$ ',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'end'
            });
        }
        input.addEventListener("input", () =>{
            validarInput(input, false);
        });
        input.addEventListener("blur", () =>{
            validarInput(input); // n passa parametro quer dizer q é true
        });
    });
}