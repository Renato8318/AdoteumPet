"use strict";

// Fonte de dados DOS CÃES (DEVE SER IDÊNTICA À DO DETALHES.HTML)
const dogs = [
  { id: 1, name: "Toby", size: "Pequeno", description: "Um cão pequeno e amigável, perfeito para apartamentos.", curiosities: "Toby adora passeios curtos e é muito sociável com outros cães. Ele se adapta bem a espaços pequenos.", image: "../img/pequeno2.jpg" },
  { id: 2, name: "Bella", size: "Médio", description: "Uma cadela enérgica que adora brincar ao ar livre.", curiosities: "Bella é cheia de energia e ama brinquedos de corrida. Também gosta de se refrescar em dias quentes.", image: "../img/medio.jpg" },
  { id: 3, name: "Max", size: "Grande", description: "Um cão protetor e leal, ideal para famílias.", curiosities: "Max é muito obediente e aprende comandos rapidamente. Ele também é ótimo com crianças.", image: "../img/grande.jpg" },
  { id: 4, name: "Luna", size: "Pequeno", description: "Carinhosa e tranquila, adora um colo.", curiosities: "Luna é muito apegada aos donos e adora cochilar perto de uma janela ensolarada.", image: "../img/pequeno.jpg" },
  { id: 5, name: "Rex", size: "Grande", description: "Muito ativo, adora correr e brincar ao ar livre.", curiosities: "Rex tem muita energia para longas caminhadas e corridas. Ele é um ótimo companheiro de aventuras.", image: "../img/grande2.jpg" },
  { id: 6, name: "Daisy", size: "Médio", description: "Docil e ótima para famílias com crianças.", curiosities: "Daisy adora brincar de pegar bolinhas e é extremamente gentil com crianças pequenas.", image: "../img/medio2.jpg" },
  { id: 7, name: "Charlie", size: "Pequeno", description: "Cheio de energia, perfeito para aventuras.", curiosities: "Charlie ama explorar novos lugares e é muito curioso com sons diferentes.", image: "../img/pequeno3.jpg" },
  { id: 8, name: "Molly", size: "Grande", description: "Carinhosa e protetora, ótima para fazendas.", curiosities: "Molly é excelente em cuidar de espaços amplos. Ela também é muito fiel aos donos.", image: "../img/grande3.jpg" },
  { id: 9, name: "Buddy", size: "Médio", description: "Sempre disposto a brincar e fazer novos amigos.", curiosities: "Buddy é extremamente sociável e faz amizade com outros cães e pessoas rapidamente.", image: "../img/medio3.jpg" },
  { id: 10, name: "Ruby", size: "Pequeno", description: "Adora companhia e está sempre ao seu lado.", curiosities: "Ruby gosta de passear calmamente e está sempre atenta aos donos, seguindo-os por toda parte.", image: "../img/pequeno4.jpg" },
  { id: 11, name: "Oscar", size: "Grande", description: "Muito leal e protetor com sua família.", curiosities: "Oscar é um excelente guardião e está sempre alerta para proteger quem ama.", image: "../img/grande4.jpg" },
  { id: 12, name: "Lucy", size: "Pequeno", description: "Pequena, mas com um coração gigante!", curiosities: "Lucy adora aprender truques e sempre busca agradar seus donos com gestos fofos.", image: "../img/pequeno5.jpg" },
  { id: 13, name: "Rocky", size: "Médio", description: "Um cão forte e corajoso, ideal para proteger sua casa.", curiosities: "Rocky é muito leal e adora brincadeiras que testem sua força, como cabo de guerra.", image: "../img/medio4.jpg" },
  { id: 14, name: "Zara", size: "Pequeno", description: "Muito doce e carinhosa, sempre pronta para um abraço.", curiosities: "Zara gosta de estar no colo dos donos e é perfeita para aquecer dias frios com sua companhia.", image: "../img/pequeno6.jpg" },
  { id: 15, name: "Spike", size: "Grande", description: "Grande e amigável, perfeito para famílias com espaço.", curiosities: "Spike é muito dócil e gosta de brincar com bolas grandes. Ele é uma ótima companhia para quintais.", image: "../img/grande5.jpg" },
  { id: 16, name: "Pipoca", size: "Pequeno", description: "Brincalhona e cheia de energia, adora correr no parque.", curiosities: "Pipoca é super animada e ama interagir com crianças. Ela se destaca por sua personalidade divertida.", image: "../img/pequeno7.jpg" }
];

// Função para renderizar os cães
function renderDogs(filteredDogs) {
  const dogList = document.getElementById("dog-list");
  dogList.innerHTML = "";

  filteredDogs.forEach((dog) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${dog.image}" alt="${dog.name}" />
      <div class="card-content">
        <h2>${dog.name}</h2>
        <p>${dog.size} Porte</p>
        <p>${dog.description}</p>
        <button onclick="adoptDog(${dog.id}, event)">Adotar</button>
      </div>
    `;

    dogList.appendChild(card);
  });
}

// Função para filtrar os cães por porte
function filterDogs(size) {
    const filteredDogs =
        size === "Todos" ? dogs : dogs.filter((dog) => dog.size === size);
    renderDogs(filteredDogs);

    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(button => {
        button.classList.remove('active-filter');
        if (button.textContent.includes(size)) {
            button.classList.add('active-filter');
        }
    });
}

// Função de adoção (SALVA O ID, ADICIONA DESTAQUE TEMPORÁRIO E REDIRECIONA)
function adoptDog(id) {
  // Captura o botão clicado
  const button = event.target; 
  
  // 1. Adiciona a classe para o destaque/zoom imediato
  button.classList.add('clicked-highlight'); 
  
  // Salva o ID do cachorro no localStorage
  localStorage.setItem('adoptedDogId', id);

  // 2. Espera 300ms (0.3s) para o efeito visual aparecer antes de redirecionar
  setTimeout(() => {
      window.location.href = 'detalhes.html';
      button.classList.remove('clicked-highlight'); 
  }, 300); 
}

// Renderiza todos os cães ao carregar a página
window.onload = () => {
  renderDogs(dogs);
  
  // Ativa visualmente o botão "Todos" ao carregar a página
  const allButton = document.querySelector('.filters button');
  if (allButton && allButton.textContent.includes('Todos')) {
      allButton.classList.add('active-filter');
  }
};