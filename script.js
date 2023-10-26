const getCocktails = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayCocktails = async () => {
    const cocktails = await getCocktails();
    const cocktailList = document.getElementById("cocktails");
    cocktails.drinks.forEach((cocktail) => {
        cocktailList.appendChild(getCocktailInfo(cocktail));
    });
};

const getCocktailInfo = (cocktail) => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.innerHTML = cocktail.strDrink;

    const category = document.createElement("p");
    category.innerHTML = `<strong>Category: </strong> ${cocktail.idDrink}`;

    const img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;

    section.appendChild(h2);
    section.appendChild(category);
    section.appendChild(glass);
    section.appendChild(instructions);
    section.appendChild(img);

    return section;
};

window.onload = () => {
    displayCocktails();
};
