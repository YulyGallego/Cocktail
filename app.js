// const URL = "https://www.thecocktaildb.com/api.php";
const inputCocktail = document.querySelector(".inputCocktail");
const containerCards = document.querySelector(".containerCards");

window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
    dataRequest(URL)
})

inputCocktail.addEventListener("keyup", () => {
    let URLFilter = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputCocktail.value}`
    dataRequest(URLFilter);
});

function dataRequest(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        // console.log(data.drinks);
        containerCards.textContent=(null)
        data.drinks.map( drinks => createcocktail(drinks));
    });
}

function createcocktail(drinks) {
    const img= document.createElement("img");
    img.src = drinks.strDrinkThumb;
    img.setAttribute('alt', drinks.strDrink);
    img.classList.add('imgcard')

    const h2 = document.createElement("h2");
    h2.textContent = drinks.strDrink;
    h2.classList.add("h2Name")

    const div = document.createElement("div");
    div.classList.add("divCard")
    div.appendChild(img);
    div.appendChild(h2);
    containerCards.appendChild(div);
}