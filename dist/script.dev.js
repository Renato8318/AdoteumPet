"use strict"; // Lista de cães (para index.html)

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var dogs = [{
  id: 1,
  name: "Toby",
  breed: "terrier/cairn",
  age: "2 anos",
  gender: "Macho",
  size: "Pequeno",
  description: "Um cão pequeno e amigável, perfeito para apartamentos.",
  curiosities: "Toby adora passeios curtos e é muito sociável com outros cães.",
  image: "../img/pequeno2.jpg",
  likes: 12
}, {
  id: 2,
  name: "Bella",
  breed: "labrador",
  age: "3 anos",
  gender: "Fêmea",
  size: "Médio",
  description: "Uma cadela enérgica que adora brincar ao ar livre.",
  curiosities: "Bella é cheia de energia e ama brincar na água.",
  image: "../img/medio.jpg",
  likes: 25
}, {
  id: 3,
  name: "Max",
  breed: "germanshepherd",
  age: "4 anos",
  gender: "Macho",
  size: "Grande",
  description: "Um cão protetor e leal, ideal para famílias.",
  curiosities: "Max aprende comandos muito rápido.",
  image: "../img/grande.jpg",
  likes: 30
}, {
  id: 4,
  name: "Luna",
  breed: "chihuahua",
  age: "1 ano",
  gender: "Fêmea",
  size: "Pequeno",
  description: "Carinhosa e tranquila, adora um colo.",
  curiosities: "Luna adora cochilar no sol.",
  image: "../img/pequeno.jpg",
  likes: 48
}, {
  id: 5,
  name: "Rex",
  breed: "retriever/golden",
  age: "5 anos",
  gender: "Macho",
  size: "Grande",
  description: "Muito ativo, adora correr e brincar ao ar livre.",
  curiosities: "Rex é o melhor companheiro de trilhas.",
  image: "../img/grande2.jpg",
  likes: 18
}, {
  id: 6,
  name: "Daisy",
  breed: "beagle",
  age: "2 anos",
  gender: "Fêmea",
  size: "Médio",
  description: "Docil e ótima para famílias com crianças.",
  curiosities: "Daisy tem um olfato incrível.",
  image: "../img/medio2.jpg",
  likes: 35
}, {
  id: 7,
  name: "Charlie",
  breed: "corgi",
  age: "3 anos",
  gender: "Macho",
  size: "Pequeno",
  description: "Cheio de energia, perfeito para aventuras.",
  curiosities: "Charlie é muito curioso e brincalhão.",
  image: "../img/pequeno3.jpg",
  likes: 22
}, {
  id: 8,
  name: "Molly",
  breed: "akita",
  age: "4 anos",
  gender: "Fêmea",
  size: "Grande",
  description: "Carinhosa e protetora, ótima para fazendas.",
  curiosities: "Molly é extremamente fiel.",
  image: "../img/grande3.jpg",
  likes: 41
}, {
  id: 9,
  name: "Buddy",
  breed: "pug",
  age: "3 anos",
  gender: "Macho",
  size: "Médio",
  description: "Sempre disposto a brincar e fazer novos amigos.",
  curiosities: "Buddy ronca um pouquinho quando dorme.",
  image: "../img/medio3.jpg",
  likes: 15
}, {
  id: 10,
  name: "Ruby",
  breed: "poodle",
  age: "2 anos",
  gender: "Fêmea",
  size: "Pequeno",
  description: "Adora companhia e está sempre ao seu lado.",
  curiosities: "Ruby é muito inteligente.",
  image: "../img/pequeno4.jpg",
  likes: 28
}, {
  id: 11,
  name: "Oscar",
  breed: "rottweiler",
  age: "5 anos",
  gender: "Macho",
  size: "Grande",
  description: "Muito leal e protetor com sua família.",
  curiosities: "Oscar é um gigante gentil.",
  image: "../img/grande4.jpg",
  likes: 33
}, {
  id: 12,
  name: "Lucy",
  breed: "maltese",
  age: "1 ano",
  gender: "Fêmea",
  size: "Pequeno",
  description: "Pequena, mas com um coração gigante!",
  curiosities: "Lucy adora aprender truques.",
  image: "../img/pequeno5.jpg",
  likes: 50
}, {
  id: 13,
  name: "Rocky",
  breed: "boxer",
  age: "3 anos",
  gender: "Macho",
  size: "Médio",
  description: "Um cão forte e corajoso, ideal para proteger sua casa.",
  curiosities: "Rocky adora pular de alegria.",
  image: "../img/medio4.jpg",
  likes: 19
}, {
  id: 14,
  name: "Zara",
  breed: "pomeranian",
  age: "2 anos",
  gender: "Fêmea",
  size: "Pequeno",
  description: "Muito doce e carinhosa, sempre pronta para um abraço.",
  curiosities: "Zara parece uma bolinha de pelos.",
  image: "../img/pequeno6.jpg",
  likes: 45
}, {
  id: 15,
  name: "Spike",
  breed: "stbernard",
  age: "4 anos",
  gender: "Macho",
  size: "Grande",
  description: "Grande e amigável, perfeito para famílias com espaço.",
  curiosities: "Spike adora crianças.",
  image: "../img/grande5.jpg",
  likes: 27
}, {
  id: 16,
  name: "Pipoca",
  breed: "frise/bichon",
  age: "1 ano",
  gender: "Fêmea",
  size: "Pequeno",
  description: "Brincalhona e cheia de energia, adora correr no parque.",
  curiosities: "Pipoca é pura diversão.",
  image: "../img/pequeno7.jpg",
  likes: 38
}]; // Lógica de Tema Escuro

function toggleDarkMode() {
  var isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  var savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // Se não houver tema salvo, use a preferência do sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }
} // Função para carregar likes do localStorage


function loadLikesFromLocalStorage() {
  var storedLikes = localStorage.getItem('dogLikes');

  if (storedLikes) {
    var parsedLikes = JSON.parse(storedLikes);
    dogs.forEach(function (dog) {
      var storedDog = parsedLikes.find(function (d) {
        return d.id === dog.id;
      });

      if (storedDog) {
        dog.likes = storedDog.likes;
      }
    });
  }
} // Função para salvar likes no localStorage


function saveLikesToLocalStorage() {
  var likesToStore = dogs.map(function (dog) {
    return {
      id: dog.id,
      likes: dog.likes
    };
  });
  localStorage.setItem('dogLikes', JSON.stringify(likesToStore));
} // Variáveis de estado para filtros combinados


var currentSize = "Todos";
var currentBreed = "Todos"; // Preenche o select de raças dinamicamente

function populateBreeds() {
  var breedFilter = document.getElementById('breed-filter');
  if (!breedFilter) return; // Extrai raças únicas e ordena alfabeticamente

  var uniqueBreeds = _toConsumableArray(new Set(dogs.map(function (dog) {
    return dog.breed;
  }))).sort();

  uniqueBreeds.forEach(function (breed) {
    if (!breed) return;
    var option = document.createElement('option');
    option.value = breed;
    option.textContent = breed.toUpperCase();
    breedFilter.appendChild(option);
  });
}

function applyAllFilters() {
  var filteredDogs = dogs.filter(function (dog) {
    var matchesSize = currentSize === "Todos" || dog.size === currentSize;
    var matchesBreed = currentBreed === "Todos" || dog.breed === currentBreed;
    return matchesSize && matchesBreed;
  });
  renderDogs(filteredDogs);
} // Função para renderizar os cães


function renderDogs(filteredDogs) {
  var dogList = document.getElementById("dog-list");
  dogList.innerHTML = "";
  filteredDogs.forEach(function (dog, index) {
    var card = document.createElement("div");
    card.className = "group opacity-0 animate-fade-in flex-shrink-0 w-[85vw] sm:w-auto snap-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2";
    card.style.animationDelay = "".concat(index * 0.05, "s");
    card.innerHTML = "\n        <div class=\"overflow-hidden h-52\">\n          <img src=\"".concat(dog.image, "\" alt=\"Foto de ").concat(dog.name, "\" class=\"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110\"/>\n        </div>\n        <div class=\"p-5 flex flex-col justify-between flex-grow\">\n          <div class=\"text-center\">\n              <span class=\"inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-lg mb-3\">").concat(dog.size, "</span>\n              <h2 class=\"text-2xl font-extrabold mb-1 text-gray-800 dark:text-white group-hover:text-emerald-500 transition-colors\">").concat(dog.name, "</h2>\n              <p class=\"text-xs font-bold text-emerald-600/80 dark:text-emerald-400/80 mb-3 uppercase tracking-widest\">").concat(dog.breed, "</p>\n              <p class=\"text-sm text-gray-600 dark:text-slate-400 mb-5 line-clamp-2 leading-relaxed\">").concat(dog.description, "</p>\n          </div>\n          <div class=\"flex items-center justify-between mt-auto\"> \n              <button data-id=\"").concat(dog.id, "\" class=\"like-btn flex items-center gap-1 text-gray-500 dark:text-slate-400 transition-colors\">\n                  <i class=\"fas fa-heart text-red-500 text-lg\"></i>\n                  <span id=\"like-count-").concat(dog.id, "\" class=\"text-sm font-semibold\">").concat(dog.likes, "</span>\n              </button>\n              <button data-id=\"").concat(dog.id, "\" class=\"adopt-btn py-2 px-4 bg-emerald-500 text-white font-black rounded-xl transition-all duration-300 hover:bg-emerald-600 hover:shadow-emerald-200 dark:hover:shadow-emerald-900/20 shadow-lg active:scale-95 flex items-center justify-center gap-2\">\n                <i class=\"fas fa-search-plus text-sm\"></i> Detalhes\n              </button>\n          </div>\n        </div>\n      ");
    dogList.appendChild(card);
  });
}

function filterDogs(size) {
  currentSize = size;
  applyAllFilters(); // Lógica para aplicar e remover a classe 'active-filter'

  var buttons = document.querySelectorAll('.filters button');
  buttons.forEach(function (button) {
    button.classList.remove('active-filter'); // Adiciona a classe ativa se o data-size do botão corresponder ao filtro

    if (button.dataset.size === size) {
      button.classList.add('active-filter');
    }
  });
}

function filterByBreed(breed) {
  currentBreed = breed;
  applyAllFilters();
} // Nova função para lidar com cliques no botão de curtir


function handleLikeClick(event) {
  var button = event.target.closest('.like-btn');
  if (!button) return;
  var dogId = parseInt(button.dataset.id);
  var dog = dogs.find(function (d) {
    return d.id === dogId;
  });

  if (dog) {
    dog.likes++;
    document.getElementById("like-count-".concat(dogId)).textContent = dog.likes; // Atualiza a UI

    saveLikesToLocalStorage(); // Salva no localStorage

    var heartIcon = button.querySelector('.fas.fa-heart');

    if (heartIcon) {
      heartIcon.classList.add('animate-pulse'); // Feedback visual no ícone

      setTimeout(function () {
        return heartIcon.classList.remove('animate-pulse');
      }, 500);
    }
  }
}

function handleAdoptClick(event) {
  var button = event.target.closest('.adopt-btn');
  if (!button) return;
  var id = button.dataset.id;
  button.classList.add('clicked-highlight'); // Sugestão: Usar URLSearchParams é mais limpo que LocalStorage para navegação

  setTimeout(function () {
    window.location.href = "detalhes.html?id=".concat(id);
  }, 300);
}

window.onload = function () {
  initTheme();
  loadLikesFromLocalStorage(); // Carrega os likes antes de renderizar

  renderDogs(dogs);
  populateBreeds(); // Event Delegation para os botões de adoção

  var dogList = document.getElementById("dog-list");

  if (dogList) {
    dogList.addEventListener("click", function (event) {
      handleAdoptClick(event); // Lógica existente de adoção

      handleLikeClick(event); // Nova lógica de curtir
    });
  }

  var allButton = document.querySelector('.filters button');

  if (allButton && allButton.dataset.size === 'Todos') {
    // Corrigido para usar dataset.size
    allButton.classList.add('active-filter');
  }
};