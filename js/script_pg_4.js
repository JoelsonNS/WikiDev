

//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    nextToSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=8-e6sYKAY30')
})


//Botão retornar
const btRetornar = document.getElementById('backToEngenharia')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'engenharia_pg_3.html'
})

//Botão avançar
const nextToModeloCascata = document.getElementById('nextToModeloCascata')

    nextToModeloCascata.addEventListener('click', () => {
        window.location.href = 'modelo_cascata_pg_5.html'
})