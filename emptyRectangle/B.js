class Rectangle {
    constructor(w, h) {
        // Check if width and height are positive integers
        if ((typeof w !== 'number' || w <= 0 || !Number.isInteger(w)) || 
            (typeof h !== 'number' || h <= 0 || !Number.isInteger(h))) {
            
            // If not, create an empty object by not setting the properties
            return;
        }
        
        // If width and height are valid, set the properties
        this.width = w;
        this.height = h;
    }
}

// Example usage:
const rect1 = new Rectangle(3, 4);
console.log(rect1); // Output: Rectangle { width: 3, height: 4 }

const rect2 = new Rectangle(0, 4);
console.log(rect2); // Output: Rectangle {}

const rect3 = new Rectangle(3, -1);
console.log(rect3); // Output: Rectangle {}

const rect4 = new Rectangle('test', 4);
console.log(rect4); // Output: Rectangle {}