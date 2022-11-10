
const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("adviceText");
const btn = document.getElementById("btn-generator");

const urlAdvice = "https://api.adviceslip.com/advice";


// seleziono loading div
const loader = document.querySelector("#loading");

// mostro loading
function displayLoading() {
  loader.classList.add("display");

  // stop loading dopo tot secondi
  setTimeout(() => {
      loader.classList.remove("display");
  }, 8000);
}

// nascondo loading 
function hideLoading() {
  loader.classList.remove("display");
}


/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getData = (URL) => {
  displayLoading();
  fetch(URL, {
      cache: "no-cache"
    })
    .then((res) => res.json())
    .then((data) => (adviceId.innerHTML = data.slip.id) + (advice.innerHTML = data.slip.advice))
    .catch((error) => console.log(error))
    .finally(() => loader.classList.remove("display"))
  
};

console.log(urlAdvice);
window.onload = getData(urlAdvice);

btn.addEventListener("click", () => {
  getData(urlAdvice)
});
