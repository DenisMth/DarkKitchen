export {food_mainCourse};

const food_mainCourse = [
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

const main = document.querySelector("main");

function createCards (){

    for (elem of food_mainCourse){
        const card = document.createElement("div");
        card.className = "foodCard";
        main.appendChild(card);
    
        const titleCard = document.createElement("h2");
        const titleCardContent = document.createTextNode(elem.name);
        titleCard.appendChild(titleCardContent);
        card.appendChild(titleCard);

        const textCard = document.createElement("p");
        const textCardContent = document.createTextNode(elem.ingredients);
        textCard.appendChild(textCardContent);
        card.appendChild(textCard);
    }
}