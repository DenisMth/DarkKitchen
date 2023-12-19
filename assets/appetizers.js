let food_entrees = [
    {
        name: "Bruschetta",
        ingredients: ["tomatoes", "fresh basil", "garlic", "baguette"],
        vegetarian: true,
        price: 6.99,
        img: "assets/resources/images/bruschetta.jpg"
    },
    {
        name: "Deviled Eggs",
        ingredients: ["eggs", "mayonnaise", "mustard", "paprika"],
        vegetarian: true,
        price: 5.50,
        img: "assets/resources/images/deviled eggs.jpg",
    },
    {
        name: "Stuffed Mushrooms",
        ingredients: ["mushrooms", "cream cheese", "garlic", "breadcrumbs"],
        vegetarian: true,
        price: 7.25,
        img: "assets/resources/images/Stuffed-Mushrooms-main-1-1.webp"
    },
    {
        name: "Tomato Soup",
        ingredients: ["Tomato", "cheese", "bread", "garlic"],
        vegetarian: true,
        price: 8.99,
        img: "assets/resources/images/easy-tomato-soup-9.jpg"
    },
    {
        name: "Crispy Chicken Wings",
        ingredients: ["chicken wings", "buffalo sauce", "celery", "ranch dressing"],
        vegetarian: false,
        price: 9.99,
        img: "assets/resources/images/fried-chicken-wings-5.webp"
    },
    {
        name: "Vegetable Spring Rolls",
        ingredients: ["cabbage", "carrots", "bell peppers", "soy sauce", "rice paper"],
        vegetarian: true,
        price: 8.90,
        img: "assets/resources/images/Vegetable-Spring-Rolls-2.webp"
    },
    {
        name: "Garlic Bread",
        ingredients: ["baguette", "butter", "garlic", "parsley"],
        vegetarian: true,
        price: 4.75,
        img: "assets/resources/images/Garlic-Bread-4.webp"
    },
    {
        name: "Caprese Skewers",
        ingredients: ["cherry tomatoes", "mozzarella balls", "fresh basil", "balsamic glaze"],
        vegetarian: true,
        price: 7.50,
        img: "assets/resources/images/Caprese-Skewers-blog-2.webp"
    },
    {
        name: "Potato Skins",
        ingredients: ["potatoes", "cheddar cheese", "bacon bits", "sour cream"],
        vegetarian: false,
        price: 6.75,
        img: "assets/resources/images/Potato-Skins-DSC_1782-II-Recipe-Card.jpg"
    },
    {
        name: "Spinach Dip",
        ingredients: ["spinach", "cream cheese", "sour cream", "garlic"],
        vegetarian: true,
        price: 6.25,
        img: "assets/resources/images/spinach-artichoke-dip-1-2.jpg",
    },
    {
        name: "Mozzarella Sticks",
        ingredients: ["mozzarella cheese sticks", "breadcrumbs", "marinara sauce"],
        vegetarian: true,
        price: 7.50,
        img: "assets/resources/images/Homemade-Mozzarella-Sticks-9.jpeg"
    },
    {
        name: "Guacamole with Tortilla Chips",
        ingredients: ["avocado", "tomatoes", "onion", "lime", "tortilla chips"],
        vegetarian: true,
        price: 8.25,
        img: "assets/resources/images/guacamole-with-tortilla-chips Mobile-1300x1150.webp",
    },
];




console.log(food_entrees);


function divise_body() {
    let header = document.createElement("HEADER");
    document.body.appendChild(header);

    let main = document.createElement("MAIN");
    document.body.appendChild(main);

    let footer = document.createElement("FOOTER");
    document.body.appendChild(footer);
   
    return {footer,main,header}
}
divise_body()

function createentrees() {
    food_entrees.forEach((food, index) => {
        let foodArticle = document.createElement("article");
        let foodPrice = document.createElement("b");
        let foodImg = document.createElement("img");
        let foodName = document.createElement("h2");
        let foodIngredients = document.createElement("li");
        let foodVegan = document.createElement("p");

        foodArticle.setAttribute("class", "entrees__" + index);
        foodArticle.style.backgroundImage = `url(${food.img})`;

        foodImg.src = food.img;
        foodImg.alt = "Image of " + food.name;
        foodImg.title = "Description: bla bla bla";

        foodPrice.textContent = "Price " + food.price + " €" ;
        foodName.textContent = food.name;
        foodIngredients.textContent = "Ingredients: " + food.ingredients.join(", ");

        if (food.vegetarian) {
            foodVegan.textContent = "Vegetarian";
        }

        foodArticle.appendChild(foodPrice);
        foodArticle.appendChild(foodName);
        foodArticle.appendChild(foodIngredients);
        foodArticle.appendChild(foodVegan);

        document.querySelector('main').appendChild(foodArticle);
    });
}

createentrees();
