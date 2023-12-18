import food_mainCourse as mainCourse from "assets/mainCourse.js"

for (elem of mainCourse){
    console.log(elem.name);
    if (elem.vegetarien){
        console.log("Plante");
    } else {
        console.log("Animal");
    }
}