async function quantidadeUsuarios () {
  const url="https://raw.githubusercontent.com/felipemarins/api/main/numero-usuarios.json"
  const res = await fetch(url)
  const dados = await res.json()
  console.log (dados)
}
quantidadeUsuarios()
