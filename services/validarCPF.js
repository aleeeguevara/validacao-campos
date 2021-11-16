const ehUmCpfComNumerosRepetidos = (cpf) => {
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",

    ]
    return cpfsInvalidos.includes(cpf)
};

const calcularTotal = multiplicador => (resultado, numeroAtual) => resultado + numeroAtual * multiplicador--;  //callback : accumulator + currentValue;

//função dentro de uma função.

const calcularDigito = (parteCpf, multiplicador) => {
    const total = parteCpf.reduce(calcularTotal(multiplicador), 0);  // array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
    const resto = total % 11;
    const digito = 11 - resto;
        if (resto > 9) {
            digito = 0;
        }
    return digito;
}

export const validarCPF = (input) => {
    const cpfNumeros = input.value.replace(/\D/g, "");

    if (ehUmCpfComNumerosRepetidos(cpfNumeros)) {
        input.setCustomValidity("Este cpf não é válido");
        return;
    }
    const primeiraParteCpf = cpfNumeros.substr(0, 9).split("");
    const primeiroDigitoCPF = Number(cpfNumeros.charAt(9));
    const primeiroDigitoCalculado = calcularDigito(primeiraParteCpf, 10);

    if (primeiroDigitoCPF !== primeiroDigitoCalculado) {
        input.setCustomValidity("Este cpf não é válido");
        return;
    };

    const segundaParteCpf = cpfNumeros.substr(0, 10).split("");
    const segundoDigitoCPF = Number(cpfNumeros.charAt(10));
    const segundoDigitoCalculado = calcularDigito(segundaParteCpf, 11);

    if (segundoDigitoCPF !== segundoDigitoCalculado) {
        input.setCustomValidity("Este cpf não é válido");
        return;
    }

    input.setCustomValidity("");
    return;
};
