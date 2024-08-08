document.addEventListener('DOMContentLoaded', (event) => {
  const $questionsContainer = document.querySelector(".questions-container");
  const $questionText = document.querySelector(".question");
  const $answersContainer = document.querySelector(".answers-container");
  const $subText = document.querySelector(".sub-text");
  let currentQuestionIndex = 0;


  
  function finishQuiz(){

    $questionsContainer.innerHTML = 
  `
    <h2 class="final-message">
    Grupo de pesquisadores da área da saúde descobre técnicas simples e eficazes para alcançar uma mente mais tranquila, equilibrada e resiliente.</h2>

    <div class="img"></div>
    <p class="sub-final">Quer saber mais sobre como começar essa transformação?</p>
    <a href="www.google.com" target="_blank"><button class="button">Sim, quero saber mais!</button></a>
    
  `
  }



  function displayNextQuestion() {
    resetState();
    
    if (questions.length === currentQuestionIndex) {
      return finishQuiz();
    }

    const currentQuestion = questions[currentQuestionIndex];
    $questionText.textContent = currentQuestion.question;
    $subText.textContent = currentQuestion.sub;
    
    currentQuestion.answers.forEach(answer => {
      const newAnswer = document.createElement("button");
      newAnswer.classList.add("button", "answer");
      newAnswer.textContent = answer.text;
      if (answer.correct) {
        newAnswer.dataset.correct = answer.correct;
      }
      $answersContainer.appendChild(newAnswer);
      newAnswer.addEventListener("click", selectAnswer);
    });
  }




  function resetState() {
    while ($answersContainer.firstChild) {
      $answersContainer.removeChild($answersContainer.firstChild);
    }
    document.body.removeAttribute("class");
  }

  function selectAnswer(event) {
    const answerClicked = event.target;

    setTimeout(() => {
      currentQuestionIndex++;
      displayNextQuestion();
    });
  }


 

  const questions = [
    { question: "1) Qual é a sua idade?", sub:" Isso é essencial para lhe oferecer o melhor produto.", answers: [
        { text: "Menos de 20 anos", correct: false },
        { text: "20-29 anos", correct: false },
        { text: "30-39 anos", correct: true },
        { text: "40+", correct: false }
      ]},
    { question: "2) Você sente que tem dificuldade em desligar sua mente e relaxar?", sub:"Esta pergunta é importante para entender sua necessidade.", answers: [
        { text: "Sim, sempre", correct: true },
        { text: "Às vezes", correct: false },
        { text: "Raramente", correct: false },
        { text: "Não, nunca", correct: false }
      ]},
    { question: '3) Com que frequência você se sente ansioso ou estressado?', sub:"Sua resposta nos ajudará a personalizar sua experiência.", answers: [
        { text: 'Todos os dias', correct: true },
        { text: 'Metade dos meus dias', correct: false },
        { text: 'Algumas vezes por semana', correct: false },
        { text: "Raramente", correct: false }
      ]},
    { question: '4) Você tem dificuldade em se concentrar no trabalho ou nos estudos?', sub:"Queremos garantir que você receba a melhor solução.", answers: [
        { text: "Sim, frequentemente", correct: false },
        { text: "A maioria das vezes", correct: true },
        { text: "Às vezes", correct: false },
        { text: "Não, raramente", correct: false },
      ]},
    { question: '5) Quanto tempo você leva para adormecer todas as noites?', sub:"Sua resposta é crucial para atender suas expectativas.", answers: [
        { text: 'Mais de uma hora', correct: false },
        { text: 'Entre 30 minutos e uma hora', correct: true },
        { text: 'Entre 15 minutos e 30 minutos', correct: false },
        { text: 'Menos de 15 minutos', correct: false }
      ]},
    { question: '6) Você já tentou meditar antes e teve dificuldades em manter a prática?', sub:"Isso nos ajudará a identificar suas maiores preocupações.", answers: [
        { text: 'Sim, várias vezes', correct: false },
        { text: 'Algumas vezes', correct: true },
        { text: 'Nunca tentei', correct: false },
        { text: 'Não, mas gostaria', correct: false }
      ]},
    { question: '7) Como você se sentiria se pudesse reduzir significativamente seu nível de estresse?', sub:"Precisamos dessas informações para oferecer um suporte adequado.", answers: [
        { text: 'Aliviado e mais feliz', correct: false },
        { text: 'Com mais energia e motivação', correct: false },
        { text: 'Me sentiria renovado', correct: false },
        { text: 'Indiferente', correct: true }
      ]},
      { question: '8) O que você mais gostaria de melhorar na sua vida?', sub:"Ajude-nos a entender melhor suas necessidades.", answers: [
        { text: 'Melhorar o foco e a concentração', correct: false },
        { text: 'Reduzir o estresse e a ansiedade', correct: false },
        { text: 'Dormir melhor', correct: false },
        { text: 'Todos acima', correct: true }
      ]},
      { question: '9) Você acredita que uma mente mais tranquila pode melhorar sua qualidade de vida?', sub:"Sua resposta nos permitirá adaptar o produto às suas necessidades.", answers: [
        { text: 'Sim, com certeza', correct: false },
        { text: 'Talvez', correct: false },
        { text: 'Não sei', correct: false },
        { text: 'Não', correct: true }
      ]},
      { question: '10) Quanto tempo você estaria disposto a dedicar diariamente para melhorar sua saúde mental?', sub:"Isso é importante para oferecer uma solução eficaz para você.", answers: [
        { text: '10-15 minutos', correct: false },
        { text: '15-30 minutos', correct: false },
        { text: '30 minutos - uma hora', correct: false },
        { text: 'Mais de uma hora', correct: true }
      ]},
      { question: '11) O que você faria se fosse menos ansioso?', sub:"Queremos entender suas prioridades para fornecer a melhor ajuda.", answers: [
        { text: 'Aproveitaria mais o momento presente, sem preocupações excessivas com o futuro.', correct: false },
        { text: 'Teria mais energia e disposição para realizar minhas atividades diárias.', correct: false },
        { text: 'Seria mais capaz de lidar com situações estressantes de forma calma e equilibrada.', correct: false },
        { text: 'Todas acima', correct: true }
      ]}
      
  ];

  // Start the quiz immediately
  displayNextQuestion();
});
