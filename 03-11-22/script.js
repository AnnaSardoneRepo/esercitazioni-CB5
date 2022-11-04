import works from "./works.js";
// import clients from "./clients.js";

const bodyEl = document.querySelector("body");
const worksEls = document.createElement("div");
worksEls.className = "allWorks";
// const footerEl = document.createElement("footer");
// footerEl.className = "myFooter";

const createCard = (data, parent) => {
    const cardEl = document.createElement("div");
    const cardTitleEl = document.createElement("h3");
    const cardImgEl = document.createElement("img");
    const cardParEl = document.createElement("p");

    cardEl.className = "work";

    cardTitleEl.textContent = data.client;
    cardImgEl.setAttribute("src", data.image);
    cardImgEl.setAttribute("alt", data.year);
    cardParEl.textContent = data.description;

    cardEl.append(cardTitleEl, cardImgEl, cardParEl);
    worksEls.appendChild(cardEl);
    parent.append(worksEls);
};

works.map((work) => createCard(work, bodyEl));


const footerEl = document.createElement("footer");
footerEl.className = "myFooter";
footerEl.idClass = "prova"; //Check per menu àncora
footerEl.innerHTML = "<strong>Powered by Anice</strong>";
document.body.append(footerEl);


// button JOIN US
document.getElementById("callUs").addEventListener("click", function () {
    alert("Call 1234567890 to apply.\nThank You!");
});


//  button TOP
document.getElementById("btnTrigger").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

// button AUDIO
const audio1 = new Audio("audio_1.wav");
document.getElementById("sound1").addEventListener("click", function () {
    audio1.play();
});
