//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    btSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=VcOeM2AD8Yk')
})


//Botão retornar
const btRetornar = document.getElementById('nextToScrumBtn')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'scrum_pg_7.html'
})

//Botão avançar
const btAvançar = document.getElementById('nextToHistoriaBtn')

    btAvançar.addEventListener('click', () => {
        window.location.href = 'historia_usuario_pg_9.html'
})