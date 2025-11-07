//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    btSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=zZbR1mmQBs0')
})


//Botão retornar
const btRetornar = document.getElementById('backToModeloCascata')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'modelo_cascata_pg_5.html'
})

//Botão avançar
const btAvançar = document.getElementById('nextToScrumBtn')

    btAvançar.addEventListener('click', () => {
        window.location.href = 'scrum_pg_7.html'
})