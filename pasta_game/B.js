class Ingredient {
    constructor(name, spiceLevel = 0) { // Default spice level to 0
      this.name = name;
      this.spiceLevel = spiceLevel;
    }
  }
  
  class Sauce {
    constructor(name, spiceLevel) {
      this.name = name;
      if (spiceLevel >= 0 && spiceLevel <= 10) {
        this.spiceLevel = spiceLevel;
      } else {
        throw new Error("Invalid spice level - must be 0-10");
      }
    }
  }
  
  class Pasta {
    constructor(type) {
      this.type = type;
      this.ingredients = [];
      this.sauce = null;
      this.isReady = false;
  
      // Set defaults based on pasta type
      switch (type) {
        case "spaghetti":
          this.cookingTime = 10;
          this.sauce = new Sauce("tomato sauce", 2); 
          this.ingredients.push(new Ingredient("ground beef")); // Regular ingredient
          this.ingredients.push(new Ingredient("garlic", 1)); // Example with spice
          break;
        case "fettuccine":
          this.cookingTime = 12;
          this.sauce = new Sauce("alfredo sauce", 1);
          this.ingredients.push(new Ingredient("chicken"));
          break;
        case "penne":
          this.cookingTime = 9;
          this.sauce = new Sauce("arrabiata sauce", 5);
          this.ingredients.push(new Ingredient("sausage"));
          break;
        default:
          console.error("Invalid pasta type");
      }
    }
    
    calculateSpiceLevel() {
        let totalSpice = this.sauce.spiceLevel;
    
        for (let ingredient of this.ingredients) {
          totalSpice += ingredient.spiceLevel;
        }
    
        this.spiceLevel = totalSpice;
    }
  
    // General preparation method
    prepare() {
      console.log("Adding pasta to boiling water...");
    }
  
    // Specific cook methods 
    cookSpaghetti() {
      console.log("Cooking spaghetti for", this.cookingTime, "minutes");
    }
  
    cookFettuccine() {
      console.log("Cooking fettuccine for", this.cookingTime, "minutes");
    }
  
    cookPenne() {
      console.log("Cooking penne for", this.cookingTime, "minutes");
    }
  
    // Check if ready
    checkReadiness() {
      // Placeholder - you would implement actual readiness logic here
      this.isReady = true; 
      console.log("Your pasta is ready!");
    }
}

let myPasta = new Pasta("spaghetti");
myPasta.calculateSpiceLevel();
console.log(myPasta.sauce.name); // Outputs: "arrabiata sauce"
console.log(myPasta.spiceLevel); // Outputs: 5