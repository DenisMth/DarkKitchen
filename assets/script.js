let food_entrees = [
    {
        name: "Bruschetta",
        ingredients: ["tomatoes", "fresh basil", "garlic", "baguette"],
        vegetarian: true,
        price: 6.99,
        picture: "assets/resources/images/bruschetta.jpg"
    },
    {
        name: "Deviled Eggs",
        ingredients: ["eggs", "mayonnaise", "mustard", "paprika"],
        vegetarian: true,
        price: 5.50,
        picture: "assets/resources/images/deviled eggs.jpg",
    },
    {
        name: "Stuffed Mushrooms",
        ingredients: ["mushrooms", "cream cheese", "garlic", "breadcrumbs"],
        vegetarian: true,
        price: 7.25,
        picture: "assets/resources/images/Stuffed-Mushrooms-main-1-1.webp"
    },
    {
        name: "Tomato Soup",
        ingredients: ["Tomato", "cheese", "bread", "garlic"],
        vegetarian: true,
        price: 8.99,
        picture: "assets/resources/images/easy-tomato-soup-9.jpg"
    },
    {
        name: "Crispy Chicken Wings",
        ingredients: ["chicken wings", "buffalo sauce", "celery", "ranch dressing"],
        vegetarian: false,
        price: 9.99,
        picture: "assets/resources/images/fried-chicken-wings-5.webp"
    },
    {
        name: "Vegetable Spring Rolls",
        ingredients: ["cabbage", "carrots", "bell peppers", "soy sauce", "rice paper"],
        vegetarian: true,
        price: 8.90,
        picture: "assets/resources/images/Vegetable-Spring-Rolls-2.webp"
    },
    {
        name: "Garlic Bread",
        ingredients: ["baguette", "butter", "garlic", "parsley"],
        vegetarian: true,
        price: 4.75,
        picture: "assets/resources/images/Garlic-Bread-4.webp"
    },
    {
        name: "Caprese Skewers",
        ingredients: ["cherry tomatoes", "mozzarella balls", "fresh basil", "balsamic glaze"],
        vegetarian: true,
        price: 7.50,
        picture: "assets/resources/images/Caprese-Skewers-blog-2.webp"
    },
    {
        name: "Potato Skins",
        ingredients: ["potatoes", "cheddar cheese", "bacon bits", "sour cream"],
        vegetarian: false,
        price: 6.75,
        picture: "assets/resources/images/Potato-Skins-DSC_1782-II-Recipe-Card.jpg"
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
        price: 7.50,
        picture: "assets/resources/images/Homemade-Mozzarella-Sticks-9.jpeg"
    },
    {
        name: "Guacamole with Tortilla Chips",
        ingredients: ["avocado", "tomatoes", "onion", "lime", "tortilla chips"],
        vegetarian: true,
        price: 8.25,
        picture: "assets/resources/images/guacamole-with-tortilla-chips Mobile-1300x1150.webp",
    },
];


let  food_desserts =[
    {
        name: "Chocolate Cake",
        ingredients: ["butter", "vanilla extract", "sugar", "chocolate", "milk", "eggs"],
        vegetarian: true,
        price: "5.20",
        picture: 'assets/resources/images/chocolate_cake.jpg'
      },
      {
        name: "Cheesecake",
        ingredients: ["cream cheese", "sugar", "eggs", "vanilla extract", "butter", "graham cracker crust"],
        vegetarian: true,
        price: "6.50",
        picture: 'assets/resources/images/cheesecake.jpg'
      },
      {
        name: "Apple Pie",
        ingredients: ["apples", "sugar", "cinnamon", "nutmeg", "butter", "pie crust"],
        vegetarian: true,
        price: "4.75",
        picture: 'assets/resources/images/apple_pie.jpg'
      },
      {
        name: "Tiramisu",
        ingredients: ["ladyfingers", "espresso", "mascarpone cheese", "cocoa powder", "eggs", "sugar"],
        vegetarian: true,
        price: "7.00",
        picture: 'assets/resources/images/tiramisu.jpg'
      },
      {
        name: "Ice Cream Sundae",
        ingredients: ["vanilla ice cream", "chocolate syrup", "whipped cream", "nuts", "cherry"],
        vegetarian: true,
        price: "4.50",
        picture: 'assets/resources/images/ice_cream_sundae.jpg'
      },
      {
        name: "Pecan Pie",
        ingredients: ["pecans", "corn syrup", "eggs", "sugar", "butter", "pie crust"],
        vegetarian: true,
        price: "6.25",
        picture: 'assets/resources/images/pecan_pie.jpg'
      },
      {
        name: "Strawberry Shortcake",
        ingredients: ["strawberries", "whipped cream", "shortcake biscuits"],
        vegetarian: true,
        price: "5.75",
        picture: 'assets/resources/images/strawberry_shortcake.jpg'
      },
      {
        name: "Mousse au Chocolat",
        ingredients: ["dark chocolate", "whipping cream", "sugar", "egg yolks"],
        vegetarian: true,
        price: "8.00",
        picture: 'assets/resources/images/mousse_au_chocolat.jpg'
      },
      {
        name: "Red Velvet Cupcakes",
        ingredients: ["flour", "cocoa powder", "buttermilk", "cream cheese frosting"],
        vegetarian: true,
        price: "3.95",
        picture: 'assets/resources/images/red_velvet_cupcakes.jpg'
      },
      {
        name: "Lemon Sorbet",
        ingredients: ["lemons", "sugar", "water"],
        vegetarian: true,
        price: "4.25",
        picture: 'assets/resources/images/lemon_sorbet.jpg'
      },
      {
        name: "Cannoli",
        ingredients: ["ricotta cheese", "powdered sugar", "cinnamon", "pistachios", "cannoli shells"],
        vegetarian: true,
        price: "6.75",
        picture: 'assets/resources/images/cannoli.jpg'
      },
      {
        name: "Banana Split",
        ingredients: ["banana", "vanilla ice cream", "chocolate syrup", "strawberry topping", "whipped cream", "nuts", "cherry"],
        vegetarian: true,
        price: "7.50",
        picture: 'assets/resources/images/banana_split.jpg'
      }
    ]; 


    let food_mainCourse = [
        {
            name : "Vol-au-vent",
            ingredients : ["Chicken", "Mushrooms", "Rice", "Pâte feuilletée"],
            picture : "assets/resources/images/Vol-au-vent.jpg",
            vegetarian : false,
            price : 8.95,
        },
    
        {
            name : "Steak frites",
            ingredients : ["Beef","Potatoes","Olive oil", "Lettuce"],
            picture : "assets/resources/images/Steak_frites.jpg",
            vegetarian : false,
            price : 9.64,
        },
    
        {
            name : "Hachis parmentier",
            ingredients : ["Gruyère", "Oignons", "Tomatoes", "Potatoes", "Milk", "Pork", "Beef", "Eggs", "Ail"],
            picture : "assets/resources/images/Hachis_parmentier.jpg",
            vegetarian : false,
            price : 8.42,
        },
    
        {
            name : "Salade de topinambour",
            ingredients : ["Quinoa", "Red cabbage", "Carrots", "Pears", "Dried raisins", "Olive oil", "CIder vinegar", "Mayonnaise"],
            picture : "assets/resources/images/Salade_topinambour.jpg",
            vegetarian : true,
            price : 11.53,
        },
    
        {
            name : "Pâtes aux champignons et miso",
            ingredients : ["Pasta", "Olive oil", "Paris Mushrooms", "Ail", "Échalottes", "Fresh cream", "Miso blanc", "Parmesan", "Algues nori"],
            picture : "assets/resources/images/Pates_champignons_miso.jpg",
            vegetarian : true,
            price : 12.46,
        },
    
        {
            name : "Lasagne",
            ingredients : ["Lasagnes","Muscade", "Gruyère", "Tomatoes", "Red wine", "Beef", "Carrots", "Oignons jaunes", "Parmesan", "Milk", "Basilic", "Céleri", "Ail", "Laurier", "Thym"],
            picture : "assets/resources/images/Lasagne.jpg",
            vegetarian : false,
            price : 9.78,
        },
    
        {
            name : "Lasagne végétarienne",
            ingredients : ["Oignons", "Gruyère", "Lasagnes", "Courgettes", "Tomatoes", "Basilic", "Herbes de provence", "Fresh cream", "Céleri", "Ail", "Thym"],
            picture : "assets/resources/images/Lasagne_vegetarienne.jpg",
            vegetarian : true,
            price : 11.45,
        },
    
        {
            name : "Poivrons farcis à la grecque",
            ingredients : ["Tomatoes", "Rice", "Feta", "Oignons", "Pignons de pin", "Dried raisins", "Olive oil", "Curcuma", "Thym"],
            picture : "assets/resources/images/Poivrons_farcis_grecs.jpg",
            vegetarian : true,
            price : 9.98,
        },
    
        {
            name : "Mijoté de tofu aux champignons",
            ingredients : ["Tofu", "Mushrooms", "Olive oil", "Haricots", "Peas", "Rice", "Carrots"],
            picture : "assets/resources/images/Tofu_aux_champignons.jpg",
            vegetarian : true,
            price : 12.56,
        },
    
        {
            name : "Pâtes carbonara",
            ingredients : ["Spaghettis", "Eggs", "Parmesan", "Lardons", "Olive oil", "Fresh cream"],
            picture : "assets/resources/images/Pates_carbonara.jpg",
            vegetarian : false,
            price : 8.57,
        },
    
        {
            name : "Tartiflette",
            ingredients : ["Olive oil", "Reblochon", "Ail", "Lardons fumés", "Potatoes", "Oignons", "Persil"],
            picture : "assets/resources/images/Tartiflette.jpg",
            vegetarian : false,
            price : 10.87,
        },
    
        {
            name : "Boulettes sauce tomate",
            ingredients : ["Tomatoes", "Beef", "Persil", "Potatoes", "Oignons", "Olive oil", "Ail"],
            picture : "assets/resources/images/Boulettes_sauce_tomate.jpg",
            vegetarian : false,
            price : 8.23,
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

function create_cards(list) {
    list.forEach((food, index) => {
        let foodArticle = document.createElement("article");
        let foodPrice = document.createElement("b");
        let foodImg = document.createElement("img");
        let foodName = document.createElement("h2");
        let foodIngredients = document.createElement("li");
        let foodVegan = document.createElement("p");

        foodArticle.setAttribute("class", "entrees__" + index);
        foodArticle.style.backgroundImage = `url(${food.picture})`;

        foodImg.src = food.picture;
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

create_cards(food_entrees);
create_cards(food_mainCourse);
create_cards(food_desserts);
