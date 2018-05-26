const fs = window.require('fs');

export default class Banco {
  banco;

  constructor(nomeDoBanco){
  	if(!this.oBancoExiste(nomeDoBanco)){
  	  this.criarBanco(nomeDoBanco);
  	  this.banco = nomeDoBanco;
  	}

  	this.banco = nomeDoBanco;
  }

  oBancoExiste(nomeDoBanco){
  	let existe = fs.existsSync('data/' + nomeDoBanco + '.json');
    return existe;
  }

  criarBanco(nomeDoBanco){
  	fs.writeFileSync('data/' + nomeDoBanco + '.json', '{}');
  }

  adquirirTodosOsDados(){
    let leitura = fs.readFileSync('data/' + this.banco + '.json').toString();
  	let dados = JSON.parse(leitura);

  	return dados;   	
  }

  adquirirDados(filho){
  	let todosOsDados = this.adquirirTodosOsDados(); 
  	let dadosDoFilho = todosOsDados[filho];

  	if(!dadosDoFilho){
  	  return [];
  	}

  	return dadosDoFilho; 
  }

  oTermoProcuradoExiste(dado, emQualParteProcurar, termoProcurado, capsLockImporta = false){
    if(capsLockImporta){
      if(dado[emQualParteProcurar].split(termoProcurado).length > 1){
        return true;
      }    

      return false;
    }

    if(dado[emQualParteProcurar].toLowerCase().split(termoProcurado.toLowerCase()).length > 1){
      return true;
    }    

    return false;
  }

  adquirirDadosPorProcura(filho, emQualParteProcurar, termoProcurado){
    let dadosParaRetornar = [];
    let dadosDoFilho = this.adquirirDados(filho);
    dadosDoFilho.map((dado) => {
      if(this.oTermoProcuradoExiste(dado, emQualParteProcurar, termoProcurado)){
        dadosParaRetornar.push(dado);
      }
    });

    return dadosParaRetornar;
  }

  inserirDados(filho, dadosParaInserir){
    let todosOsDados = this.adquirirTodosOsDados();

    if(!todosOsDados[filho]){
      todosOsDados[filho] = [];
    }

    todosOsDados[filho].push(dadosParaInserir);
    fs.writeFileSync('data/' + this.banco + '.json', JSON.stringify(todosOsDados));
  }

  editarDados(filho, nomeDaParteParaEditar, novoValor, parteNecessaria, valorDaParteNecessaria){
    let todosOsDados = this.adquirirTodosOsDados();
    let dadosDoFilho = todosOsDados[filho];

    for(let contadorDeDados = 0; contadorDeDados < dadosDoFilho.length; contadorDeDados++){
      if(dadosDoFilho[contadorDeDados][parteNecessaria] == valorDaParteNecessaria){
        todosOsDados[filho][contadorDeDados][nomeDaParteParaEditar] = novoValor;
      }
    }

   fs.writeFileSync('data/' + this.banco + '.json', JSON.stringify(todosOsDados));  
  }

  removerDados(filho, parteNecessaria, valorDaParteNecessaria) {
    let todosOsDados = this.adquirirTodosOsDados();
    let dadosDoFilho = todosOsDados[filho];

    for(let contadorDeDados = 0; contadorDeDados < dadosDoFilho.length; contadorDeDados++){
      if(dadosDoFilho[contadorDeDados][parteNecessaria] == valorDaParteNecessaria){
        todosOsDados[filho].splice(contadorDeDados, 1);
        contadorDeDados = 0;
      }
    }

    fs.writeFileSync('data/' + this.banco + '.json', JSON.stringify(todosOsDados));     
  }
}