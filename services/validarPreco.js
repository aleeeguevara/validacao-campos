export const validarPreco = (input) =>{
    const preco = input.formartToNumber();

    if(preco === 0 ){
        input.setCustomValidity("O valor do produto deve ser maior do que R$ 0");   
        return; 
    }
    input.setCustomValidity("")   ;
        return; 
}