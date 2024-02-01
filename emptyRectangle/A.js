class Rectangle {
    constructor(w, h) {
        // Validate input to create an empty object if needed:
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            // Create an empty object for invalid dimensions
            return {}; 
        }

        // Otherwise, continue creating the Rectangle object
        this.width = w;
        this.height = h;
    }
}

const rect1 = new Rectangle(5, 3); // Valid Rectangle object
const rect2 = new Rectangle(0, 8); // Empty object
const rect3 = new Rectangle(4, -2); // Empty object
const rect4 = new Rectangle(3.5, 6); // Empty object (not an integer)

console.log(rect1); // Will output the Rectangle object
console.log(rect2); // Will output an empty object {}
console.log(rect3); // Will output an empty object {}
console.log(rect4); // Will output an empty object {} 