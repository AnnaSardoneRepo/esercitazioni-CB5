
const title = document.createElement("h1");
const textTitle = document.createTextNode("sono il titolo di Hero");
title.appendChild(textTitle);

const imgHero = document.createElement("img");
imgHero.src = "https://picsum.photos/200/200";

const element = document.getElementById("hero");
element.appendChild(title);
element.appendChild(imgHero);

import products from "./products.js";

const createCard = (title, imgUrl, description, category, parent) => {
    const cardEl = document.createElement("div");
  
    // cardEl.className = "card";
    // if (category === "jewelery") {
    //   cardEl.classList.add("special-card");
    // }
  
    // title
    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
  
    // img
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", category);
  
    // paragraph
    const parEl = document.createElement("p");
    parEl.textContent = description;
  
    cardEl.append(titleEl, imgEl, parEl);
    parent.appendChild(cardEl);
  };

    const mostpopularEl = document.querySelector(".most-popular");
    const bestSellerEl = document.querySelector(".best-seller");

    // const headerMostPop = document.createElement("h3");
    // const headerBestSell = document.createElement("h3");

// headerMostPop.textContent = "Most popular";
// headerBestSell.textContent = "Best seller";

// mostpopularEl.appendChild(headerMostPop);
// bestSellerEl.appendChild(headerBestSell);

products
  .filter((product) => product.price <= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      mostpopularEl
    );
  });

  products
  .filter((product) => product.price >= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      bestSellerEl
    );
  });