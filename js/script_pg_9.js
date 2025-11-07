//Botão saiba mais
const btSaibaMais = document.getElementById('nextToSaibaMais')

    btSaibaMais.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=pLJ3LxR292w')
})


//Botão retornar
const btRetornar = document.getElementById('backToRequisitosBtn')

    btRetornar.addEventListener('click', () => {
        window.location.href = 'requisitos_pg_8.html'
})

//Botão avançar
const btRetornarIni = document.getElementById('backtToInicioBtn')

    btRetornarIni.addEventListener('click', () => {
        window.location.href = 'index.html'
})