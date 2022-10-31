const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'A minha resposta é não.',
  'Você pode contar com isso.',
  'É melhor não te dizer agora.',
  'A meu ver, sim.',
  'As minhas fontes dizem que não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  // No caso de não escreverem nenhuma pergunta
  if (inputPergunta.value == '') {
    alert('Digite a sua pergunta!')
    return
  }

  // Para que depois de cliclar no botão, ele fique desativo
  buttonPerguntar.setAttribute('disabled', true)

  // esta constante recebe a pergunta digitada
  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar um número aleatório para o index
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  // mostrar a pergunta colocada + a resposta gerada
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1
  
// Para limpar a pergunta na caixa de digitar
  function clearInput() {
    const input = document.querySelector('input')
    input.value = ''
  }

  // limpar a resposta depois de 3 segundos e voltar a ativar o botão
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
  clearInput()
}
