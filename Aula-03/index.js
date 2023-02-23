'use strict'

import { produtos } from "./produtos.js"

const criaCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const image = document.createElement('img')
    image.classList.add('card__image')
    image.src = `./img/${produto.image}`
    
    const title = document.createElement('h5')
    title.classList.add('card__title')
    title.textContent = produto.name

    const description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = produto.description

    const price = document.createElement('span')
    price.classList.add('card__price')
    price.textContent = `R$ ${produto.price}`

    card.append(image, title, description, price)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)

    container.replaceChildren(...cards)
}

carregarProdutos()