import{ getCSS } from"./common.js"

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
        color: getCSS('--primary-color')
      }
    }
  ]
const layout = {
  plot_bgcolor:getCSS('--bg-color')
  paper_bgcolor:getCSS('--bg-color')
  title: {
    text:'Redes socias com mais usuários no mundo',
      x: 0,
      font:{
      color: getCSS('--primary-color')
      family: getCSS('--font'),
       size:30   
    }
}
xaxis:{
  tickfont:{
    color:getCSS('--primary-color')
    size:16
  }
  title:{
    text:'nome das redes sociais',
      font:<
    {
      color:getCSS('--secondary-color')
  }
}
}
    yaxis:{
      title:'bilhóes de usuários ativos',
        font:{
        color: getCSS('--secondary-color')
      }
    }
    }
  }
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
plotly.newplot(grafico, data)
}
quantidadeUsuarios()
