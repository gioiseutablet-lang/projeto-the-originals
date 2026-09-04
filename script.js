/* =====================================
   THE ORIGINALS NETFLIX
   JAVASCRIPT
===================================== */


/* ================= PERSONAGENS ================= */

const characters = [

    {
        name: "Klaus Mikaelson",
        role: "O Híbrido Original",
        image: "imagens/klaus.jpg",
        description: "O híbrido original, filho de Mikael e Esther. Klaus é poderoso, impulsivo e extremamente protetor com sua família e sua filha Hope.",
        status: "Imortal",
        species: "Híbrido Original"
    },

    {
        name: "Elijah Mikaelson",
        role: "O Irmão Nobre",
        image: "imagens/elijah.jpg",
        description: "Elijah é o irmão conhecido por sua elegância, lealdade e código de honra. Ele fará qualquer coisa para manter sua família unida.",
        status: "Imortal",
        species: "Vampiro Original"
    },

    {
        name: "Rebekah Mikaelson",
        role: "A Irmã Imortal",
        image: "imagens/rebekah.jpg",
        description: "Rebekah deseja uma vida normal, mas sua natureza imortal e sua família sempre a puxam de volta para o mundo sobrenatural.",
        status: "Imortal",
        species: "Vampira Original"
    },

    {
        name: "Hope Mikaelson",
        role: "A Tribrida",
        image: "imagens/hope.jpg",
        description: "Filha de Klaus e Hayley, Hope é uma das criaturas sobrenaturais mais poderosas do mundo.",
        status: "Viva",
        species: "Tribrida"
    },

    {
        name: "Hayley Marshall",
        role: "A Lobisomem",
        image: "imagens/hayley.jpg",
        description: "Hayley é uma lobisomem determinada e a mãe de Hope. Sua coragem a transforma em uma das maiores protetoras da família.",
        status: "Mortal",
        species: "Lobisomem"
    },

    {
        name: "Marcel Gerard",
        role: "O Rei de Nova Orleans",
        image: "imagens/marcel.jpg",
        description: "Criado por Klaus, Marcel construiu seu próprio império em Nova Orleans e se tornou um dos maiores rivais dos Mikaelson.",
        status: "Imortal",
        species: "Vampiro"
    },

    {
        name: "Freya Mikaelson",
        role: "A Bruxa Original",
        image: "imagens/freya.jpg",
        description: "A irmã mais velha dos Mikaelson, uma bruxa extremamente poderosa que retorna para proteger sua família.",
        status: "Viva",
        species: "Bruxa"
    },

    {
        name: "Davina Claire",
        role: "A Bruxa Poderosa",
        image: "imagens/davina.jpg",
        description: "Davina é uma jovem bruxa que se torna uma das figuras mais importantes da política sobrenatural de Nova Orleans.",
        status: "Viva",
        species: "Bruxa"
    }

];


/* ================= ELEMENTOS ================= */

const charactersGrid = document.getElementById("charactersGrid");

const characterSearch = document.getElementById("characterSearch");

const characterModal = document.getElementById("characterModal");

const infoModal = document.getElementById("infoModal");

const seasonModal = document.getElementById("seasonModal");

const modalImage = document.getElementById("modalImage");

const modalName = document.getElementById("modalName");

const modalRole = document.getElementById("modalRole");

const modalDescription = document.getElementById("modalDescription");

const modalStatus = document.getElementById("modalStatus");

const modalSpecies = document.getElementById("modalSpecies");

const closeModal = document.getElementById("closeModal");

const closeInfoModal = document.getElementById("closeInfoModal");

const closeSeasonModal = document.getElementById("closeSeasonModal");

const playButton = document.getElementById("playButton");

const infoButton = document.getElementById("infoButton");

const storyButton = document.getElementById("storyButton");

const modalAction = document.getElementById("modalAction");

const searchButton = document.getElementById("searchButton");

const seasonModalTitle = document.getElementById("seasonModalTitle");

const seasonModalDescription = document.getElementById("seasonModalDescription");


/* ================= RENDERIZAR PERSONAGENS ================= */

function renderCharacters(list) {

    charactersGrid.innerHTML = "";

    if (list.length === 0) {

        charactersGrid.innerHTML = `
            <p style="color:#aaa;">
                Nenhum personagem encontrado.
            </p>
        `;

        return;

    }

    list.forEach((character) => {

        const card = document.createElement("article");

        card.className = "character-card";

        card.innerHTML = `

            <img
                src="${character.image}"
                alt="${character.name}"
                loading="lazy"
                onerror="this.src='imagens/banner.jpg'"
            >

            <div class="character-overlay">

                <span class="character-role">
                    ${character.role}
                </span>

                <h3 class="character-name">
                    ${character.name}
                </h3>

                <p class="character-description">
                    ${character.description}
                </p>

            </div>

        `;

        card.addEventListener("click", () => {

            openCharacterModal(character);

        });

        charactersGrid.appendChild(card);

    });

}


/* ================= MODAL PERSONAGEM ================= */

function openCharacterModal(character) {

    modalImage.src = character.image;

    modalImage.alt = character.name;

    modalName.textContent = character.name;

    modalRole.textContent = character.role;

    modalDescription.textContent = character.description;

    modalStatus.textContent = character.status;

    modalSpecies.textContent = character.species;

    characterModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ================= FECHAR MODAIS ================= */

function closeAllModals() {

    characterModal.classList.remove("active");

    infoModal.classList.remove("active");

    seasonModal.classList.remove("active");

    document.body.style.overflow = "";

}

closeModal.addEventListener("click", closeAllModals);

closeInfoModal.addEventListener("click", closeAllModals);

closeSeasonModal.addEventListener("click", closeAllModals);


/* ================= CLICAR FORA DO MODAL ================= */

characterModal.addEventListener("click", (event) => {

    if (event.target === characterModal) {

        closeAllModals();

    }

});

infoModal.addEventListener("click", (event) => {

    if (event.target === infoModal) {

        closeAllModals();

    }

});

seasonModal.addEventListener("click", (event) => {

    if (event.target === seasonModal) {

        closeAllModals();

    }

});


/* ================= TECLA ESC ================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeAllModals();

    }

});


/* ================= BUSCA ================= */

characterSearch.addEventListener("input", (event) => {

    const searchTerm = event.target.value.toLowerCase().trim();

    const filteredCharacters = characters.filter(character =>

        character.name.toLowerCase().includes(searchTerm) ||

        character.role.toLowerCase().includes(searchTerm) ||

        character.species.toLowerCase().includes(searchTerm)

    );

    renderCharacters(filteredCharacters);

});


/* ================= BOTÃO ASSISTIR ================= */

playButton.addEventListener("click", () => {

    alert(
        "🎬 Em uma versão real, este botão poderia abrir um trailer ou um player de vídeo."
    );

});


/* ================= BOTÃO MAIS INFORMAÇÕES ================= */

infoButton.addEventListener("click", () => {

    infoModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* ================= BOTÃO HISTÓRIA ================= */

storyButton.addEventListener("click", () => {

    document.getElementById("temporadas").scrollIntoView({
        behavior: "smooth"
    });

});


/* ================= BOTÃO DO MODAL ================= */

modalAction.addEventListener("click", () => {

    alert(
        "🩸 Explore a trajetória deste personagem através das cinco temporadas."
    );

});


/* ================= TEMPORADAS ================= */

const seasonButtons = document.querySelectorAll(".season-button");

const seasonTexts = {

    1: {
        title: "Temporada 1",
        description: "Klaus retorna a Nova Orleans e descobre que Marcel governa a cidade. A gravidez de Hayley muda o destino da família."
    },

    2: {
        title: "Temporada 2",
        description: "A família enfrenta Esther, Dahlia e antigos inimigos. Hope se torna o centro de uma guerra sobrenatural."
    },

    3: {
        title: "Temporada 3",
        description: "Uma profecia prevê a queda dos Mikaelson. A família precisa enfrentar seus próprios destinos."
    },

    4: {
        title: "Temporada 4",
        description: "Cinco anos depois, Klaus está separado de sua família e Hope se torna a chave para derrotar o Hollow."
    },

    5: {
        title: "Temporada 5",
        description: "A última temporada mostra o destino final dos Mikaelson e o sacrifício de Klaus e Elijah."
    }

};

seasonButtons.forEach(button => {

    button.addEventListener("click", () => {

        const season = button.dataset.season;

        seasonModalTitle.textContent = seasonTexts[season].title;

        seasonModalDescription.textContent = seasonTexts[season].description;

        seasonModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* ================= NAVBAR AO ROLAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= BOTÃO DE BUSCA ================= */

searchButton.addEventListener("click", () => {

    document.getElementById("personagens").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        characterSearch.focus();

    }, 700);

});


/* ================= INICIALIZAÇÃO ================= */

renderCharacters(characters);