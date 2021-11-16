export const validarDataNascimento = input => {
    const dataNascimento = new Date(input.value);
    const dataAtual = new Date();

    const dataFaz18 = new Date(
        dataNascimento.getUTCFullYear() + 18,
        dataNascimento.getUTCMonth(),
        dataNascimento.getUTCDate()
    );

    if (dataFaz18 > dataAtual) {
        input.setCustomValidity("A idade mínima é de 18");
        return;
    }
    input.setCustomValidity("");
    return;
};


