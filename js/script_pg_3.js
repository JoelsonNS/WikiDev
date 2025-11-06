
//Botão saiba mais
const nextToSaibaMais = document.getElementById('nextToSaibaMais');

  nextToSaibaMais.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=ciQ2FObc3tc&list=PLxI8Can9yAHfeoA_yMm9iKJVxQprljmL9&index=1')
  })

//botão avançar
const nextToCriseBtn = document.getElementById('nextToCriseBtn');

  nextToCriseBtn.addEventListener('click', () => {
    // Redireciona o usuário para a próxima página (Crise do Software)
    window.location.href = 'crise_software_pg_4.html';
  });


  //Botão retornar
const backToIntroducao = document.getElementById('backToIntroducao');

  backToIntroducao.addEventListener('click', () => {
    // Redireciona o usuário para a próxima página (Crise do Software)
    window.location.href = 'introducao_pg_2.html';
  });