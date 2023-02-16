'use strict'

const adicionar = document.getElementById('adicionar')

const adicionarCard = (nome, nota) => {

    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    const nomeA = nome
    const notaA = nota
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class = "aluno__nome">${nomeA}</h2>
                        <span class = "aluno__nota">${notaA}</span>`

    if (isNaN(notaA)) {

        alert('ERRO: Precisa digitar um número!')

    } else if (notaA == '' || nomeA == '') {

        alert('ERRO: O campo não pode estar vazio!')

    } else if (notaA < 0 || notaA > 10) {

        alert('ERRO: A nota vai de 0(zero) a 10(dez)')

    } else {

        if (notaA <= 5) {
            novaDiv.classList.add('reprovado')
            novaDiv.classList.remove('aprovado')
        } else {
            novaDiv.classList.add('aprovado')
            novaDiv.classList.remove('reprovado')
        }

        container.appendChild(novaDiv)
    }

    

}

const handleClick = () => {

    const aluno = {

        nome: prompt('Digite o nome do aluno(a)'),
        nota: prompt('Digite a nota sua nota')
    }

    adicionarCard(aluno)



}

adicionar.addEventListener('click', handleClick)

// const adicionarCard = () => {

//     const container = document.getElementById('container')

//     container.innerHTML += '<div class="item"></div>'

// }