async function quantidadeUsuarios () {
  const url="https://raw.githubusercontent.com/felipemarins/api/main/numero-usuarios.json"
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = object.keys(dados)
  const quantidadeUsuarios = object.values(dados)
  const data = [
    {
      x:nomeDasRedes,
      y:quantidadeUsuarios
      type: 'bar'
      marker:{
        color: getComputedStyle(document.body).getPropertyValue('--primary-color')
      }
    }
  ]
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
plotly.newplot(grafico)
}
quantidadeUsuarios()
