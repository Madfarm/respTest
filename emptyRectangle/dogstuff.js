class Pet {
    constructor(name) {
      this.name = name;
    }
  
    static definition() {
      return `A pet is an animal kept primarily for a person's company.`;
    }
  }
  
  // Inherits from Pet
  
  class Dog extends Pet {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    static definition() {
      return (
        super.definition() + " Dogs are one of the most common types of pets."
      );
    }
  }

let spinach = new Dog("Spinach", "Shina Inu");
console.log(spinach.definition());