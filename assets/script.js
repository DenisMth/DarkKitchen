let food_entrees = [
  {
    name: "Bruschetta",
    ingredients: ["tomatoes", "fresh basil", "garlic", "baguette"],
    vegetarian: true,
    price: 6.99,
    picture: "assets/resources/images/bruschetta.jpg",
  },
  {
    name: "Deviled Eggs",
    ingredients: ["eggs", "mayonnaise", "mustard", "paprika"],
    vegetarian: true,
    price: 5.5,
    picture: "assets/resources/images/deviled_eggs.jpg",
  },
  {
    name: "Stuffed Mushrooms",
    ingredients: ["mushrooms", "cream cheese", "garlic", "breadcrumbs"],
    vegetarian: true,
    price: 7.25,
    picture: "assets/resources/images/Stuffed-Mushrooms-main-1-1.webp",
  },
  {
    name: "Tomato Soup",
    ingredients: ["Tomato", "cheese", "bread", "garlic"],
    vegetarian: true,
    price: 8.99,
    picture: "assets/resources/images/easy-tomato-soup-9.jpg",
  },
  {
    name: "Crispy Chicken Wings",
    ingredients: ["chicken wings", "buffalo sauce", "celery", "ranch dressing"],
    vegetarian: false,
    price: 9.99,
    picture: "assets/resources/images/fried-chicken-wings-5.webp",
  },
  {
    name: "Vegetable Spring Rolls",
    ingredients: [
      "cabbage",
      "carrots",
      "bell peppers",
      "soy sauce",
      "rice paper",
    ],
    vegetarian: true,
    price: 8.9,
    picture: "assets/resources/images/Vegetable-Spring-Rolls-2.webp",
  },
  {
    name: "Garlic Bread",
    ingredients: ["baguette", "butter", "garlic", "parsley"],
    vegetarian: true,
    price: 4.75,
    picture: "assets/resources/images/Garlic-Bread-4.webp",
  },
  {
    name: "Caprese Skewers",
    ingredients: [
      "cherry tomatoes",
      "mozzarella balls",
      "fresh basil",
      "balsamic glaze",
    ],
    vegetarian: true,
    price: 7.5,
    picture: "assets/resources/images/Caprese-Skewers-blog-2.webp",
  },
  {
    name: "Potato Skins",
    ingredients: ["potatoes", "cheddar cheese", "bacon bits", "sour cream"],
    vegetarian: false,
    price: 6.75,
    picture: "assets/resources/images/Potato-Skins-DSC_1782-II-Recipe-Card.jpg",
  },
  {
    name: "Spinach Dip",
    ingredients: ["spinach", "cream cheese", "sour cream", "garlic"],
    vegetarian: true,
    price: 6.25,
    picture: "assets/resources/images/spinach-artichoke-dip-1-2.jpg",
  },
  {
    name: "Mozzarella Sticks",
    ingredients: ["mozzarella cheese sticks", "breadcrumbs", "marinara sauce"],
    vegetarian: true,
    price: 7.5,
    picture: "assets/resources/images/Homemade-Mozzarella-Sticks-9.jpeg",
  },
  {
    name: "Guacamole with Tortilla Chips",
    ingredients: ["avocado", "tomatoes", "onion", "lime", "tortilla chips"],
    vegetarian: true,
    price: 8.25,
    picture: "assets/resources/images/guacamole-with-tortilla-chips.jpg",
  },
];

let food_desserts = [
  {
    name: "Chocolate Cake",
    ingredients: [
      "butter",
      "vanilla extract",
      "sugar",
      "chocolate",
      "milk",
      "eggs",
    ],
    vegetarian: true,
    price: "5.20",
    picture: "assets/resources/images/chocolate_cake.jpg",
  },
  {
    name: "Cheesecake",
    ingredients: [
      "cream cheese",
      "sugar",
      "eggs",
      "vanilla extract",
      "butter",
      "graham cracker crust",
    ],
    vegetarian: true,
    price: "6.50",
    picture: "assets/resources/images/cheesecake.jpg",
  },
  {
    name: "Apple Pie",
    ingredients: [
      "apples",
      "sugar",
      "cinnamon",
      "nutmeg",
      "butter",
      "pie crust",
    ],
    vegetarian: true,
    price: "4.75",
    picture: "assets/resources/images/apple_pie.jpg",
  },
  {
    name: "Tiramisu",
    ingredients: [
      "ladyfingers",
      "espresso",
      "mascarpone cheese",
      "cocoa powder",
      "eggs",
      "sugar",
    ],
    vegetarian: true,
    price: "7.00",
    picture: "assets/resources/images/tiramisu.jpg",
  },
  {
    name: "Ice Cream Sundae",
    ingredients: [
      "vanilla ice cream",
      "chocolate syrup",
      "whipped cream",
      "nuts",
      "cherry",
    ],
    vegetarian: true,
    price: "4.50",
    picture: "assets/resources/images/ice_cream_sundae.jpg",
  },
  {
    name: "Pecan Pie",
    ingredients: [
      "pecans",
      "corn syrup",
      "eggs",
      "sugar",
      "butter",
      "pie crust",
    ],
    vegetarian: true,
    price: "6.25",
    picture: "assets/resources/images/pecan_pie.jpg",
  },
  {
    name: "Strawberry Shortcake",
    ingredients: ["strawberries", "whipped cream", "shortcake biscuits"],
    vegetarian: true,
    price: "5.75",
    picture: "assets/resources/images/strawberry_shortcake.jpg",
  },
  {
    name: "Mousse au Chocolat",
    ingredients: ["dark chocolate", "whipping cream", "sugar", "egg yolks"],
    vegetarian: true,
    price: "8.00",
    picture: "assets/resources/images/mousse_au_chocolat.jpg",
  },
  {
    name: "Red Velvet Cupcakes",
    ingredients: [
      "flour",
      "cocoa powder",
      "buttermilk",
      "cream cheese frosting",
    ],
    vegetarian: true,
    price: "3.95",
    picture: "assets/resources/images/red_velvet_cupcakes.jpg",
  },
  {
    name: "Lemon Sorbet",
    ingredients: ["lemons", "sugar", "water"],
    vegetarian: true,
    price: "4.25",
    picture: "assets/resources/images/lemon_sorbet.jpg",
  },
  {
    name: "Cannoli",
    ingredients: [
      "ricotta cheese",
      "powdered sugar",
      "cinnamon",
      "pistachios",
      "cannoli shells",
    ],
    vegetarian: true,
    price: "6.75",
    picture: "assets/resources/images/cannoli.jpg",
  },
  {
    name: "Banana Split",
    ingredients: [
      "banana",
      "vanilla ice cream",
      "chocolate syrup",
      "strawberry topping",
      "whipped cream",
      "nuts",
      "cherry",
    ],
    vegetarian: true,
    price: "7.50",
    picture: "assets/resources/images/banana_split.jpg",
  },
];

let food_mainCourse = [
  {
    name: "Vol-au-vent",
    ingredients: ["Chicken", "Mushrooms", "Rice", "Pâte feuilletée"],
    picture: "assets/resources/images/Vol-au-vent.jpg",
    vegetarian: false,
    price: 8.95,
  },

  {
    name: "Steak frites",
    ingredients: ["Beef", "Potatoes", "Olive oil", "Lettuce"],
    picture: "assets/resources/images/Steak_frites.jpg",
    vegetarian: false,
    price: 9.64,
  },

  {
    name: "Hachis parmentier",
    ingredients: [
      "Gruyère",
      "Oignons",
      "Tomatoes",
      "Potatoes",
      "Milk",
      "Pork",
      "Beef",
      "Eggs",
      "Ail",
    ],
    picture: "assets/resources/images/Hachis_parmentier.jpg",
    vegetarian: false,
    price: 8.42,
  },

  {
    name: "Salade de topinambour",
    ingredients: [
      "Quinoa",
      "Red cabbage",
      "Carrots",
      "Pears",
      "Dried raisins",
      "Olive oil",
      "CIder vinegar",
      "Mayonnaise",
    ],
    picture: "assets/resources/images/Salade_topinambour.jpg",
    vegetarian: true,
    price: 11.53,
  },

  {
    name: "Pâtes aux champignons et miso",
    ingredients: [
      "Pasta",
      "Olive oil",
      "Paris Mushrooms",
      "Ail",
      "Échalottes",
      "Fresh cream",
      "Miso blanc",
      "Parmesan",
      "Algues nori",
    ],
    picture: "assets/resources/images/Pates_champignons_miso.jpg",
    vegetarian: true,
    price: 12.46,
  },

  {
    name: "Lasagne",
    ingredients: [
      "Lasagnes",
      "Muscade",
      "Gruyère",
      "Tomatoes",
      "Red wine",
      "Beef",
      "Carrots",
      "Oignons jaunes",
      "Parmesan",
      "Milk",
      "Basilic",
      "Céleri",
      "Ail",
      "Laurier",
      "Thym",
    ],
    picture: "assets/resources/images/Lasagne.jpg",
    vegetarian: false,
    price: 9.78,
  },

  {
    name: "Lasagne végétarienne",
    ingredients: [
      "Oignons",
      "Gruyère",
      "Lasagnes",
      "Courgettes",
      "Tomatoes",
      "Basilic",
      "Herbes de provence",
      "Fresh cream",
      "Céleri",
      "Ail",
      "Thym",
    ],
    picture: "assets/resources/images/Lasagne_vegetarienne.jpg",
    vegetarian: true,
    price: 11.45,
  },

  {
    name: "Poivrons farcis à la grecque",
    ingredients: [
      "Tomatoes",
      "Rice",
      "Feta",
      "Oignons",
      "Pignons de pin",
      "Dried raisins",
      "Olive oil",
      "Curcuma",
      "Thym",
    ],
    picture: "assets/resources/images/Poivrons_farcis_grecs.jpg",
    vegetarian: true,
    price: 9.98,
  },

  {
    name: "Mijoté de tofu aux champignons",
    ingredients: [
      "Tofu",
      "Mushrooms",
      "Olive oil",
      "Haricots",
      "Peas",
      "Rice",
      "Carrots",
    ],
    picture: "assets/resources/images/Tofu_aux_champignons.jpg",
    vegetarian: true,
    price: 12.56,
  },

  {
    name: "Pâtes carbonara",
    ingredients: [
      "Spaghettis",
      "Eggs",
      "Parmesan",
      "Lardons",
      "Olive oil",
      "Fresh cream",
    ],
    picture: "assets/resources/images/Pates_carbonara.jpg",
    vegetarian: false,
    price: 8.57,
  },

  {
    name: "Tartiflette",
    ingredients: [
      "Olive oil",
      "Reblochon",
      "Ail",
      "Lardons fumés",
      "Potatoes",
      "Oignons",
      "Persil",
    ],
    picture: "assets/resources/images/Tartiflette.jpg",
    vegetarian: false,
    price: 10.87,
  },

  {
    name: "Boulettes sauce tomate",
    ingredients: [
      "Tomatoes",
      "Beef",
      "Persil",
      "Potatoes",
      "Oignons",
      "Olive oil",
      "Ail",
    ],
    picture: "assets/resources/images/Boulettes_sauce_tomate.jpg",
    vegetarian: false,
    price: 8.23,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  create_button_veggie();
  create_button_dark();
  create_button_entrees();
  create_button_meal();
  create_Order();

});

function clear_cards() {
  let cardsremove = document.querySelector("main");
  cardsremove.innerHTML = "";
  let title = document.querySelector("h2");
  title.remove();
}

function create_cards(list, type) {
  let titre = document.createElement("h2");
  titre.textContent = "List of " + type;
  document.querySelector("header").appendChild(titre);

  list.forEach((food, index) => {
    let foodArticle = document.createElement("article");
    let section = document.createElement("section");
    let foodPrice = document.createElement("button");
    let foodImg = document.createElement("img");
    let foodName = document.createElement("h2");
    let foodIngredients = document.createElement("li");
    let foodVeggie = document.createElement("img");

    foodArticle.setAttribute("class", type + "_" + index);
    foodArticle.style.backgroundImage = `url(${food.picture})`;

    foodImg.src = food.picture;
    foodImg.alt = "Image of " + food.name;
    foodImg.title = "Description: bla bla bla";

    foodPrice.textContent = food.price + " €";
    foodName.textContent = food.name;
    foodIngredients.textContent = "Ingredients: " + food.ingredients.join(", ");

    if (food.vegetarian === true) {
      (foodVeggie.src = "assets/resources/images/plant.svg"),
        foodVeggie.setAttribute("class", "vegetarian");
      foodArticle.appendChild(foodVeggie);
    }

    if (food.vegetarian) {
      foodVeggie.textContent = "Vegetarian";
    }

    foodArticle.appendChild(foodPrice);
    section.appendChild(foodName);
    foodArticle.appendChild(section);
    section.appendChild(foodIngredients);
    foodArticle.appendChild(foodVeggie);

    document.querySelector("main").appendChild(foodArticle);
  });
}
function dark_mode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}

function create_button_dark() {
  let button = document.createElement("button");
  button.className = "dark";
  button.className = "darkMode";
  button.addEventListener("click", dark_mode);
  document.querySelector("header").appendChild(button);
}

function veggie() {
  let cards = document.querySelectorAll("article");
  cards.forEach((card) => {
    let noMeat = card.querySelector("img.vegetarian");
    if (noMeat) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function create_button_veggie() {
  let button = document.createElement("button");
  button.className = "veggie";
  button.addEventListener("click", veggie);
  button.textContent = "vegetarian ?";
  document.querySelector("header").appendChild(button);
}

function create_button_entrees() {
  let button = document.createElement("button");
  button.className = "appetizers";
  button.addEventListener("click", clear_cards);
  button.addEventListener("click", () => create_cards(food_entrees, "entrees"));
  button.textContent = "Show Appetizers";
  document.querySelector("footer").appendChild(button);
}

function create_button_meal() {
  let button = document.createElement("button");
  button.className = "mainCourse";
  button.addEventListener("click", clear_cards);
  button.addEventListener("click", () =>
    create_cards(food_mainCourse, "mainCourse")
  );
  button.textContent = "Show Feast";
  document.querySelector("footer").appendChild(button);
}

function create_button_dessert() {
  let button = document.createElement("button");
  button.className = "dessert";
  button.addEventListener("click", clear_cards);
  button.addEventListener("click", () =>
    create_cards(food_desserts, "dessert")
  );
  button.textContent = "Show dessert";
  document.querySelector("footer").appendChild(button);
}

function create_Order() {
  let livraison = document.createElement("p");
  livraison.textContent = "Service de livraison !";
  document.querySelector("footer").appendChild(livraison);

  let order = document.createElement("section");
  order.id = "order_Form";

  let h3_Order_Form = document.createElement("h3");
  h3_Order_Form.textContent = "Place Your Order";
  order.appendChild(h3_Order_Form);

  let form = document.createElement("form");
  form.id = "Order_Food_Form";

  let infos = ["First Name", "Last Name", "Address"];

  infos.forEach((infoText) => {
    let label = document.createElement("label");
    label.textContent = infoText + ":";
    let input = document.createElement("input");
    input.type = "text";
    input.required = true;
    label.appendChild(input);
    form.appendChild(label);
  });

  let button = document.createElement("button");
  button.type = "button";
  button.className = "submit";
  button.textContent = "Place Order";
  button.addEventListener("click", submit_Order);
  button.addEventListener("click", createOrderSummary);
  form.appendChild(button);
  order.appendChild(form);
  document.querySelector("footer").appendChild(order);
}

function submit_Order() {
  let firstName = document.getElementById("Order_Food_Form").elements[0].value;
  let lastName = document.getElementById("Order_Food_Form").elements[1].value;
  let address = document.getElementById("Order_Food_Form").elements[2].value;

  if (firstName && lastName && address) {
    let summary = document.getElementById("summaryContent");

    summary.innerHTML =
      " Your name is : " +
      firstName +
      lastName +
      ", you adress is : " +
      address;
  }
}

function createOrderSummary() {
  let order_summary = document.createElement("section");
  order_summary.id = "orderSummary";

  let h3_order_summary = document.createElement("h3");
  h3_order_summary.textContent = "your info : ";
  order_summary.appendChild(h3_order_summary);

  let summary_content = document.createElement("div");
  summary_content.id = "summaryContent";
  order_summary.appendChild(summary_content);

  document.querySelector("footer").appendChild(order_summary);

  let button = document.createElement("button");
  button.type = "button";
  button.className = "clearsummary";
  button.textContent = "go back";
  button.addEventListener("click", clear_summary);
  document.querySelector("section#orderSummary").appendChild(button);

  let button_val = document.createElement("button");
  button_val.type = "button";
  button_val.className = "validation";
  button_val.textContent = "Valid command";
  button_val.addEventListener("click", valid_command);
  document.querySelector("section#orderSummary").appendChild(button_val);

}

function clear_summary () {

  let summary_remove = document.querySelector("section#orderSummary");
  summary_remove.remove();
 
}
function valid_command () {
  alert('Merci ! Votre commande est en cours de livraison')
  window.location.reload();

}

/*
function ajouterAuPanier(food) {
  const articleExistante = panier.find((item) => item.name === food.name);

  if (articleExistante) {
    articleExistante.quantity += 1;
  } else {
    const nouvelElement = {
      name: food.name,
      price: food.price,
      quantity: 1,
    };
    panier.push(nouvelElement);
  }

  total += food.price;
  mettreAJourAffichagePanier();
}

function create_cards(liste, type) {
  let cardsBlock = document.createElement("div");
  cardsBlock.className = "cardsBlock";
  document.querySelector("main").appendChild(cardsBlock);

  liste.forEach((food, index) => {
    let foodArticle = document.createElement("article");
    let section = document.createElement("section");
    let foodPrice = document.createElement("button");
    foodPrice.className = "cardButton";
    let foodImg = document.createElement("img");
    let foodName = document.createElement("h2");
    let foodIngredients = document.createElement("li");
    let foodVeggie = document.createElement("img");

    foodArticle.setAttribute("class", type + "_" + index);
    foodArticle.style.backgroundImage = `url(${food.picture})`;

    foodImg.src = food.picture;
    foodImg.alt = "Image de " + food.name;

    foodPrice.textContent = food.price + " €";  // Utiliser le bouton existant
    foodName.textContent = food.name;
    foodIngredients.textContent = "Ingrédients : " + food.ingredients.join(", ");

    if (food.vegetarian === true) {
      foodVeggie.src = "assets/resources/images/plant.svg";
      foodVeggie.setAttribute("class", "vegetarian");
      foodArticle.appendChild(foodVeggie);
    }

    if (food.vegetarian) {
      foodVeggie.textContent = "Végétarien";
    }

    foodArticle.appendChild(foodPrice);
    section.appendChild(foodName);
    foodArticle.appendChild(section);
    section.appendChild(foodIngredients);
    foodArticle.appendChild(foodVeggie);

    // Utiliser le bouton existant
    foodPrice.addEventListener("click", () => ajouterAuPanier(food));

    cardsBlock.appendChild(foodArticle);
  });
}
*/