preferences = {
    "fish": "like",
    "egg": "dislike",
    "bacon": "allergic",
    "shrimp": "like",
    "gluten": "like"
}

function toggleFoodPreference(foodCategory){

    if (preferences[foodCategory] == "like") {
        preferences[foodCategory] = "dislike"
        id(foodCategory).classList.remove("food-like");
        id(foodCategory).classList.add("food-dislike");

    } else if (preferences[foodCategory] == "dislike") {
        preferences[foodCategory] = "allergic"
        id(foodCategory).classList.remove("food-dislike");
        id(foodCategory).classList.add("food-allergic");

    } else {
        preferences[foodCategory] = "like"
        id(foodCategory).classList.remove("food-allergic");
        id(foodCategory).classList.add("food-like");
    }

}

function id(elementId){

    return document.getElementById(elementId);

}