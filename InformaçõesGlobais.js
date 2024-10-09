const url="https://raw.githubusercontent.com/felipemarins/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(params){
  const res=await fetch(url)
  const dados = res.json()
  const paragrafo= document.createElement('p')
  paragrafo.classlist.add('graficos-container__texto')
  
}
function visualizarInformacoesGlobais()
