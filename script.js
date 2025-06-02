function calcular() {
    const valor = Number(document.getElementById("valor").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
      case 'multiplicar':
        resultado = valor * 2;
        break;
      case 'dividir':
        resultado = valor / 2;
        break;
      case 'somar':
        resultado = valor + 2;
        break;
      default:
        resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  }