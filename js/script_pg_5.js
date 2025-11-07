
//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    btSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=mhK0nr9plIU')
})


//Botão retornar
const btRetornar = document.getElementById('backToCriseBtn')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'crise_software_pg_4.html'
})

//Botão avançar
const btAvançar = document.getElementById('nextToMetodologiasBtn')

    btAvançar.addEventListener('click', () => {
        window.location.href = 'metodologias_ageis_pg_6.html'
})