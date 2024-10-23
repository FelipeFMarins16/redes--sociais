const url="https://raw.githubusercontent.com/felipemarins/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(params){
  const res=await fetch(url)
  const dados = res.json()
  const pessoasconctadas = (dados.total_pessoas_conectadas / 1e9)
  const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt(dados.tempo_medio)
  const minutos = Math.round((dados. tempo-medio - horas) * 100)
  const paragrafo= document.createElement('p')
  paragrafo.classlist.add('graficos-container__texto')
  paragrafo.innerHTML='voce sabia que o mundo tem <span> ${dados.total_pessoas_mundo}</span>de pessoas e que aproximadamente <span>${pessoasConectadas}bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas}horas </span> e <span>${minutos}minutos </span>conctadas.
  c onst container=document.getElementyById('graficos-container')
  container.appendChild(paragrafo)
}
function visualizarInformacoesGlobais()
