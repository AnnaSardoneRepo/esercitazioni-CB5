const cardAll = document.createElement("div");
cardAll.className = "allCards";
const bodyEl = document.querySelector("body");


const createCardPokemon = (data) => {
    const cardEl = document.createElement("div");
    const cardImgEl = document.createElement("img");
    const cardIdEl = document.createElement("p");
    const cardNameEl = document.createElement("h2");
    const cardTypeEl = document.createElement("p");

    cardEl.className = "card";

    cardImgEl.setAttribute("src", data.sprites.front_default);
    cardImgEl.className = "card__img";

    cardIdEl.textContent = `#${data.id}`;
    cardIdEl.className = "card__id";

    cardNameEl.textContent = data.name;
    cardTypeEl.textContent = `Type: ${data.types[0].type.name}`;



    cardEl.append(cardImgEl, cardIdEl, cardNameEl, cardTypeEl);
    cardAll.append(cardEl);
    bodyEl.appendChild(cardAll);

}


fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
    .then((res) => res.json())
    .then((poke) => {
        poke.results.forEach((item) => fetch(item.url)
            .then((res) => res.json()
                .then((pokemon) => createCardPokemon(pokemon))))
    });

    const ColorCard = {
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
        fire: "#FDDFDF",
        ghost: "#705898",
        ice: "#98d8d8",
    };
