//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    btSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=3aCww_1RnL0')
})


//Botão retornar
const btRetornar = document.getElementById('backToMetodologiasBtn')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'metodologias_ageis_pg_6.html'
})

//Botão avançar
const btAvançar = document.getElementById('nextToRequisitosBtn')

    btAvançar.addEventListener('click', () => {
        window.location.href = 'requisitos_pg_8.html'
})