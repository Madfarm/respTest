class Pasta {
    constructor(type) {
      this.type = type;
      this.ingredients = [];
      this.isReady = false;
  
      // Set defaults based on pasta type
      switch (type) {
        case "spaghetti":
          this.cookingTime = 10; // Minutes
          this.ingredients.push("tomato sauce", "ground beef");
          break;
        case "fettuccine":
          this.cookingTime = 12; 
          this.ingredients.push("alfredo sauce", "chicken");
          break;
        case "penne":
          this.cookingTime = 9; 
          this.ingredients.push("arrabiata sauce", "sausage");
          break;
        default: 
          console.error("Invalid pasta type");
      }
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



let myPasta = new Pasta("fettuccine"); 


myPasta.prepare(); 


myPasta.cookFettuccine(); 


myPasta.checkReadiness(); 