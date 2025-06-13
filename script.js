function result(valor, unidade) {
  document.getElementById('resultado').textContent = `Resultado: ${valor} ${unidade}`;
}
//Logicas de conversao

function comprimento(de, valor, para) {
  let resultado;
  if (de === 'cm') {
    resultado = (para === 'm') ? valor / 100 :
                (para === 'km') ? valor / 100000 : valor;
  } else if (de === 'm') {
    resultado = (para === 'cm') ? valor * 100 :
                (para === 'km') ? valor / 1000 : valor;
  } else if (de === 'km') {
    resultado = (para === 'cm') ? valor * 100000 :
                (para === 'm') ? valor * 1000 : valor;
  }
  result(resultado, para);
}

function temperatura(de, valor, para) {
  let resultado;
  if (de === para) {
    resultado = valor;
  } else if (de === 'C') {
    resultado = (para === 'F') ? (valor * 1.8 + 32) :
                (para === 'K') ? (parseFloat(valor) + 273.15) : valor;
  } else if (de === 'F') {
    resultado = (para === 'C') ? (valor - 32) / 1.8 :
                (para === 'K') ? ((valor - 32) / 1.8 + 273.15) : valor;
  } else if (de === 'K') {
    resultado = (para === 'C') ? (valor - 273.15) :
                (para === 'F') ? ((valor - 273.15) * 1.8 + 32) : valor;
  }
  result(resultado, para);
}

function massa(de, valor, para) {
  let resultado;
  if (de === para) {
    resultado = valor;
  } else if (de === 'g' && para === 'kg') {
    resultado = valor / 1000;
  } else if (de === 'kg' && para === 'g') {
    resultado = valor * 1000;
  }
  result(resultado, para);
}

function main() {
  const valor = parseFloat(document.getElementById('inputvalor').value);
  const unidade = document.getElementById('unidade').value;

  if (unidade === 'comprimento') {
    const de = document.getElementById('comprimentovalor').value;
    const para = document.getElementById('comprimentoresultado').value;
    comprimento(de, valor, para);
  } else if (unidade === 'Temperatura') {
    const de = document.getElementById('temperaturavalor').value;
    const para = document.getElementById('temperaturarresultado').value;
    temperatura(de, valor, para);
  } else if (unidade === 'Massa') {
    const de = document.getElementById('massavalor').value;
    const para = document.getElementById('massaresultado').value;
    massa(de, valor, para);
  }
}

//Exibir apenas selects de acordo com a unidade escolhida
document.getElementById('unidade').addEventListener('change', function () {
  const unidade = this.value;

  document.getElementById('select-comprimento').style.display = 'none';
  document.getElementById('select-temperatura').style.display = 'none';
  document.getElementById('select-massa').style.display = 'none';

  if (unidade === 'comprimento') {
    document.getElementById('select-comprimento').style.display = 'block';
  } else if (unidade === 'Temperatura') {
    document.getElementById('select-temperatura').style.display = 'block';
  } else if (unidade === 'Massa') {
    document.getElementById('select-massa').style.display = 'block';
  }
});

//Garante que o usuario nao escolha a mesma opcao*/
function escolherOutraOpcao(select, valorAtual) {
  const opcoes = Array.from(select.options)
    .map(opt => opt.value)
    .filter(val => val !== valorAtual);

  const aleatorio = opcoes[Math.floor(Math.random() * opcoes.length)];
  select.value = aleatorio;
}

document.getElementById('comprimentovalor').addEventListener('change', function () {
  const de = this.value;
  const paraSelect = document.getElementById('comprimentoresultado');
  if (paraSelect.value === de) {
    escolherOutraOpcao(paraSelect, de);
  }
});

document.getElementById('comprimentoresultado').addEventListener('change', function () {
  const para = this.value;
  const deSelect = document.getElementById('comprimentovalor');
  if (deSelect.value === para) {
    escolherOutraOpcao(deSelect, para);
  }
});

document.getElementById('temperaturavalor').addEventListener('change', function () {
  const de = this.value;
  const paraSelect = document.getElementById('temperaturarresultado');
  if (paraSelect.value === de) {
    escolherOutraOpcao(paraSelect, de);
  }
});

document.getElementById('temperaturarresultado').addEventListener('change', function () {
  const para = this.value;
  const deSelect = document.getElementById('temperaturavalor');
  if (deSelect.value === para) {
    escolherOutraOpcao(deSelect, para);
  }
});

document.getElementById('massavalor').addEventListener('change', function () {
  const de = this.value;
  const paraSelect = document.getElementById('massaresultado');
  if (paraSelect.value === de) {
    escolherOutraOpcao(paraSelect, de);
  }
});

document.getElementById('massaresultado').addEventListener('change', function () {
  const para = this.value;
  const deSelect = document.getElementById('massavalor');
  if (deSelect.value === para) {
    escolherOutraOpcao(deSelect, para);
  }
});