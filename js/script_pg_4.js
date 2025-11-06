

//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    btSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=mhK0nr9plIU')
})


//Botão retornar
const btRetornar = document.getElementById('backToEngenharia')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'engenharia_pg_3.html'
})

//Botão avançar
const nextToModeloCascata = document.getElementById('nextToModeloCascata')

    nextToModeloCascata.addEventListener('click', () => {
        window.location.href = ''
})