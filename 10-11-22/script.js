
const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("adviceText");
const btn = document.getElementById("btn-generator");


const urlAdvice = "https://api.adviceslip.com/advice";
/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getData = (URL) => {
  fetch(URL, {
      cache: "no-cache"
    })
    .then((res) => res.json())
    .then((res) => (adviceId.innerHTML = res.slip.id) + (advice.innerHTML = res.slip.advice))
}

console.log(urlAdvice);
window.onload = getData(urlAdvice);

btn.addEventListener("click", () => {
  getData(urlAdvice)
})
