class Pasta {
    constructor(type) {
        this.type = type;
        this.isReady = false;
        this.ingredients = [];
        this.cookingTime = 0;
    }

    // Default preparation method
    prepare() {
        console.log(`Preparing ${this.type} pasta...`);
        this.boilWater();
        this.addPasta();
    }

    // Shared methods
    boilWater() {
        console.log('Boiling water...');
    }

    addPasta() {
        console.log(`Adding ${this.type} to boiling water...`);
    }

    // Type-specific methods
    prepareSpaghetti() {
        this.ingredients = ["spaghetti", "tomato sauce", "ground beef"];
        this.cookingTime = 10; // Placeholder time in minutes
    }

    prepareFettuccine() {
        this.ingredients = ["fettuccine", "alfredo sauce", "chicken"];
        this.cookingTime = 8;
    }

    preparePenne() {
        this.ingredients = ["penne", "pesto", "sun-dried tomatoes"];
        this.cookingTime = 9;
    }

    // Method to start cooking and check if the dish is ready
    cook() {
        if (this.ingredients.length === 0) {
            console.log("You need to prepare the pasta first!");
            return;
        }

        console.log(`Cooking ${this.type} for ${this.cookingTime} minutes...`);
        setTimeout(() => {
            this.isReady = true;
            console.log(`${this.type} is ready to serve!`);
        }, this.cookingTime * 1000); // Simulating cooking time
    }
}

// How to use the class:
let myPasta = new Pasta("spaghetti");
myPasta.prepareSpaghetti(); // Using the type specific preparation
myPasta.cook(); // Start cooking the pasta