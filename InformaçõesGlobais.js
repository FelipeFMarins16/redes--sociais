const url="https://raw.githubusercontent.com/felipemarins/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(params){
  const res=await fetch(url)
  const dados = res.json()
  console.log(dados)
  const paragrafo= document.createElement('p')
  paragrafo.classlist.add('graficos-container__texto')
  paragrafo.innerHTML='voce sabia que o mundo tem ${dados.total_pessoas_mundo}de pessoas e que aproximadamente ${total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conctadas.'
  console.log(paragrafo)
}
function visualizarInformacoesGlobais()
