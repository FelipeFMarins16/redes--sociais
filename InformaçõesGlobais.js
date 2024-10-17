const url="https://raw.githubusercontent.com/felipemarins/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(params){
  const res=await fetch(url)
  const dados = res.json()
  console.log(dados)
  const paragrafo= document.createElement('p')
  paragrafo.classlist.add('graficos-container__texto')
  paragrafo.innerHTML='voce sabia que o mundo tem <span> ${dados.total_pessoas_mundo}</span>de pessoas e que aproximadamente <span>${total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conctadas.'
  console.log(paragrafo)
  const container=document.getElementyById('graficos-container')
  container.appendChild(paragrafo)
}
function visualizarInformacoesGlobais()
