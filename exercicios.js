// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arrayOrdenado = array.filter((elemento, indice, array) => {
    if (elemento % 2 == 0) {
      return elemento;
    }
  });
  return arrayOrdenado;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return retornaNumerosPares(array).map((element) => element ** 2);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let max = Math.max(...array);
  return max;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = Math.max(num1, num2);
  let menorNumero = Math.min(num1, num2);
  let diferenca = maiorNumero - menorNumero;
  let maiorDivisivelPorMenor;
  if (maiorNumero % menorNumero === 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }
  return { maiorNumero, maiorDivisivelPorMenor, diferenca };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayDeNumerosPares = [];
  let contador = 0;
  while (arrayDeNumerosPares.length < n) {
    if (contador % 2 == 0) {
      arrayDeNumerosPares.push(contador);
    }
    contador++;
  }
  return arrayDeNumerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let tipo;
  if (ladoA == ladoB && ladoB == ladoC) {
    tipo = "Equilátero";
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    tipo = "Isósceles";
  } else {
    tipo = "Escaleno";
  }
  return tipo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function retornaMenorNumero(array) {
    let min = Math.min(...array);
    return min;
  }

  if (array.length > 2) {
    let copiaDoArray = [...array];
    function kickMaiorEMenorDoArray(array) {
      let kickMaior = retornaMaiorNumero(array);
      let kickMenor = retornaMenorNumero(array);
      copiaDoArray.splice(copiaDoArray.indexOf(kickMaior), 1);
      copiaDoArray.splice(copiaDoArray.indexOf(kickMenor), 1);
      return array;
    }

    kickMaiorEMenorDoArray(copiaDoArray);

    const segundoMaiorNumeroRealOficial = retornaMaiorNumero(copiaDoArray);
    const segundoMenorNumeroRealOficial = retornaMenorNumero(copiaDoArray);

    return [segundoMaiorNumeroRealOficial, segundoMenorNumeroRealOficial];
  } else {
    return [retornaMenorNumero(array), retornaMaiorNumero(array)];
  }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let novoObj = { ...pessoa, nome: "ANÔNIMO" };
  return novoObj;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const apenasPessoasAutorizadas = pessoas.filter((elemento) => {
    return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60;
  });
  return apenasPessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const apenasPessoasNaoAutorizadas = pessoas.filter((elemento) => {
    return (
      elemento.altura < 1.5 || elemento.idade <= 14 || elemento.idade >= 60
    );
  });
  return apenasPessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (const i of contas) {
    let somaDasCompras = 0;
    for (const u in i.compras) {
      somaDasCompras += i.compras[u];
    }
    i.compras = [];
    i.saldoTotal -= somaDasCompras;
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort((a, b) => {
    if (a.nome > b.nome) {
      return 1;
    } else if (a.nome < b.nome) {
      return -1;
    } else {
      return 0;
    }
  });
  return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const resultado = consultas.sort((a, b) => {
        return new Date(a.dataDaConsulta.split('/').reverse()).getTime() - new Date(b.dataDaConsulta.split('/').reverse()).getTime()
    })

    return resultado
}
