function veggie() {
    let cards = document.querySelectorAll("article");
    cards.forEach(card => {
      let noMeat = card.querySelector('img.vegetarian');
      if (noMeat) {
        card.style.display = ''; 
      } else {
        card.style.display = 'none';  
      }
    });
  }

  function create_button_veggie() {
    let button = document.createElement("button");
    button.addEventListener('click', veggie);
    button.textContent = "vegetarian ?";
    document.querySelector('header').appendChild(button);
  }

  if (food.vegetarian === true) {
    foodvegan.src = "assets/resources/images/plant.svg",
    foodvegan.setAttribute("class", "vegetarian");
    foodArticle.appendChild(foodvegan)
  }

  let foodvegan =document.createElement("img");