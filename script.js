let  foods_dessert =[
    {
        name: "Chocolate Cake",
        ingredients: ["butter", "vanilla extract", "sugar", "chocolate", "milk", "eggs"],
        vegetarian: true,
        price: "5.20",
        img: 'chocolate_cake.jpg'
      },
      {
        name: "Cheesecake",
        ingredients: ["cream cheese", "sugar", "eggs", "vanilla extract", "butter", "graham cracker crust"],
        vegetarian: true,
        price: "6.50",
        img: 'cheesecake.jpg'
      },
      {
        name: "Apple Pie",
        ingredients: ["apples", "sugar", "cinnamon", "nutmeg", "butter", "pie crust"],
        vegetarian: true,
        price: "4.75",
        img: 'apple_pie.jpg'
      },
      {
        name: "Tiramisu",
        ingredients: ["ladyfingers", "espresso", "mascarpone cheese", "cocoa powder", "eggs", "sugar"],
        vegetarian: true,
        price: "7.00",
        img: 'tiramisu.jpg'
      },
      {
        name: "Ice Cream Sundae",
        ingredients: ["vanilla ice cream", "chocolate syrup", "whipped cream", "nuts", "cherry"],
        vegetarian: true,
        price: "4.50",
        img: 'ice_cream_sundae.jpg'
      },
      {
        name: "Pecan Pie",
        ingredients: ["pecans", "corn syrup", "eggs", "sugar", "butter", "pie crust"],
        vegetarian: true,
        price: "6.25",
        img: 'pecan_pie.jpg'
      },
      {
        name: "Strawberry Shortcake",
        ingredients: ["strawberries", "whipped cream", "shortcake biscuits"],
        vegetarian: true,
        price: "5.75",
        img: 'strawberry_shortcake.jpg'
      },
      {
        name: "Mousse au Chocolat",
        ingredients: ["dark chocolate", "whipping cream", "sugar", "egg yolks"],
        vegetarian: true,
        price: "8.00",
        img: 'mousse_au_chocolat.jpg'
      },
      {
        name: "Red Velvet Cupcakes",
        ingredients: ["flour", "cocoa powder", "buttermilk", "cream cheese frosting"],
        vegetarian: true,
        price: "3.95",
        img: 'red_velvet_cupcakes.jpg'
      },
      {
        name: "Lemon Sorbet",
        ingredients: ["lemons", "sugar", "water"],
        vegetarian: true,
        price: "4.25",
        img: 'lemon_sorbet.jpg'
      },
      {
        name: "Cannoli",
        ingredients: ["ricotta cheese", "powdered sugar", "cinnamon", "pistachios", "cannoli shells"],
        vegetarian: true,
        price: "6.75",
        img: 'cannoli.jpg'
      },
      {
        name: "Banana Split",
        ingredients: ["banana", "vanilla ice cream", "chocolate syrup", "strawberry topping", "whipped cream", "nuts", "cherry"],
        vegetarian: true,
        price: "7.50",
        img: 'banana_split.jpg'
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

    function create_dessert() {
        foods_dessert.forEach((food,index) => {
            let food_Article = document.createElement("article");
            let food_Price = document.createElement("b");
            let food_Img = document.createElement("img");
            let food_Name = document.createElement("h2");
            let food_Ingredients = document.createElement("button");
            let food_Vegan = document.createElement("p");
            

            food_Article.setAttribute("class", "dessert_"+ index );
            food_Article.style.backroudImage = 'url(${food.img})'
            food_img.src = foods_dessert.imgFile;
            food_img.alt = "image de " + foods.name;
            food_img.title = "bla bla bla";
            
            food_Price.textContent = "Price: $" + food.price;
            food_Img.src = food.img;
            food_Img.alt = food.name;
            food_Name.textContent = food.name;
            food_Ingredients.textContent = "Ingredients: " + food.ingredients.join(", ");

        if (food.vegetarian) {
            food_Vegan.textContent = "Vegetarian";
        }
           food_Article.appendChild(food_Price) ;
           food_Article.appendChild(food_Img) ;
           food_Article.appendChild(food_Name) ;
           food_Article.appendChild(food_Ingredients) ;
           food_Article.appendChild(food_Vegan)

           document.querySelector('main').appendChild(food_Article);
        
        });
    }
        create_dessert()
    
