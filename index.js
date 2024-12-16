preferences = {
    "fish": "like",
    "egg": "dislike",
    "bacon": "allergic",
    "shrimp": "like",
    "gluten": "like"
}

function toggleFoodPreference(food, option){

    if (option == "like") {
        id(food + "Like").classList.add("food-toggle-active");
        id(food + "Dislike").classList.remove("food-toggle-active");
        id(food + "Allergic").classList.remove("food-toggle-active");
    } else if (option == "dislike") {
        id(food + "Like").classList.remove("food-toggle-active");
        id(food + "Dislike").classList.add("food-toggle-active");
        id(food + "Allergic").classList.remove("food-toggle-active");
    } else {
        id(food + "Like").classList.remove("food-toggle-active");
        id(food + "Dislike").classList.remove("food-toggle-active");
        id(food + "Allergic").classList.add("food-toggle-active");
    }

}

function id(elementId){

    return document.getElementById(elementId);

}