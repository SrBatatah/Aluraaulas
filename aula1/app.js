let numero = parseInt(Math.random() * 200 + 1);
while (numero < 10) {
    let numadc = parseInt(prompt(`Digite um novo número ate chegar em 10: \no numero atual é ${numero}`));
    if (!isNaN(numadc)) {
        numero += numadc;
        alert(`O número atual é ${numero}`);
        if (numero === 10) {
            alert("Você acertou o número!");
            break;
        }
        if (numero > 10) {
            alert("Você ultrapassou o número!");
        }
    } else {
        alert("Por favor, digite um número válido."); 
    }
}
