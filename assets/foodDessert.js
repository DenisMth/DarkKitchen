let  foods_dessert =[
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
    
    function createDesserts() {
        foods_dessert.forEach((food, index) => {
            let foodArticle = document.createElement("article");
            let foodPrice = document.createElement("b");
            let foodImg = document.createElement("img");
            let foodName = document.createElement("h2");
            let foodIngredients = document.createElement("button");
            let foodVegan = document.createElement("p");
    
            foodArticle.setAttribute("class", "dessert_" + index);
            foodArticle.style.backgroundImage = `url(${food.picture})`;
    
            foodImg.src = food.picture;
            foodImg.alt = "Image of " + food.name;
            foodImg.title = "Description: bla bla bla";
    
            foodPrice.textContent = "Price: $" + food.price;
            foodName.textContent = food.name;
            foodIngredients.textContent = "Ingredients: " + food.ingredients.join(", ");
    
            if (food.vegetarian) {
                foodVegan.textContent = "Vegetarian";
            }
    
            foodArticle.appendChild(foodPrice);
            foodArticle.appendChild(foodImg);
            foodArticle.appendChild(foodName);
            foodArticle.appendChild(foodIngredients);
            foodArticle.appendChild(foodVegan);
    
            document.querySelector('main').appendChild(foodArticle);
        });
    }
    
    createDesserts();
    
