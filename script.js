const dogs = [
  {
    id: 1,
    name: "Toby",
    size: "Pequeno",
    description: "Um cão pequeno e amigável, perfeito para apartamentos.",
    image: "/img/pequeno2.jpg",
  },
  {
    id: 2,
    name: "Bella",
    size: "Médio",
    description: "Uma cadela enérgica que adora brincar ao ar livre.",
    image: "/img/medio.jpg",
  },
  {
    id: 3,
    name: "Max",
    size: "Grande",
    description: "Um cão protetor e leal, ideal para famílias.",
    image: "/img/grande.jpg",
  },
  {
    id: 4,
    name: "Luna",
    size: "Pequeno",
    description: "Carinhosa e tranquila, adora um colo.",
    image: "/img/pequeno.jpg",
  },
  {
    id: 5,
    name: "Rex",
    size: "Grande",
    description: "Muito ativo, adora correr e brincar ao ar livre.",
    image: "/img/grande2.jpg",
  },
  {
    id: 6,
    name: "Daisy",
    size: "Médio",
    description: "Docil e ótima para famílias com crianças.",
    image: "/img/medio2.jpg",
  },
  {
    id: 7,
    name: "Charlie",
    size: "Pequeno",
    description: "Cheio de energia, perfeito para aventuras.",
    image: "/img/pequeno3.jpg",
  },
  {
    id: 8,
    name: "Molly",
    size: "Grande",
    description: "Carinhosa e protetora, ótima para fazendas.",
    image: "/img/grande3.jpg",
  },
  {
    id: 9,
    name: "Buddy",
    size: "Médio",
    description: "Sempre disposto a brincar e fazer novos amigos.",
    image: "/img/medio3.jpg",
  },
  {
    id: 10,
    name: "Ruby",
    size: "Pequeno",
    description: "Adora companhia e está sempre ao seu lado.",
    image: "/img/pequeno4.jpg",
  },
  {
    id: 11,
    name: "Oscar",
    size: "Grande",
    description: "Muito leal e protetor com sua família.",
    image: "/img/grande4.jpg",
  },
  {
    id: 12,
    name: "Lucy",
    size: "Pequeno",
    description: "Pequena, mas com um coração gigante!",
    image: "/img/pequeno5.jpg",
  },
  // Novos cachorros
  {
    id: 13,
    name: "Rocky",
    size: "Médio",
    description: "Um cão forte e corajoso, ideal para proteger sua casa.",
    image: "/img/medio4.jpg",
  },
  {
    id: 14,
    name: "Zara",
    size: "Pequeno",
    description: "Muito doce e carinhosa, sempre pronta para um abraço.",
    image: "/img/pequeno6.jpg",
  },
  {
    id: 15,
    name: "Spike",
    size: "Grande",
    description: "Grande e amigável, perfeito para famílias com espaço.",
    image: "/img/grande5.jpg",
  },
  // Novo cachorro pequeno
  {
    id: 16,
    name: "Pipoca",
    size: "Pequeno",
    description: "Brincalhona e cheia de energia, adora correr no parque.",
    image: "/img/pequeno7.jpg",
  },
];

// Função para renderizar os cães
function renderDogs(filteredDogs) {
  const dogList = document.getElementById("dog-list");
  dogList.innerHTML = ""; // Limpa o conteúdo anterior

  filteredDogs.forEach((dog) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${dog.image}" alt="${dog.name}" />
      <div class="card-content">
        <h2>${dog.name}</h2>
        <p>${dog.size} Porte</p>
        <p>${dog.description}</p>
        <button onclick="adoptDog(${dog.id})">Adotar</button>
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
}

// Função de adoção
function adoptDog(id) {
  // Armazena o ID do cachorro no localStorage
  localStorage.setItem('adoptedDogId', id);

  // Redireciona para a página de detalhes
  window.location.href = 'detalhes.html';
}

// Renderiza todos os cães ao carregar a página
window.onload = () => {
  renderDogs(dogs);
};
