class Swan {
    constructor(name, instrument, id, melody) {
        this.name = name;
        this.instrument = instrument;
        this.id = id;
        this.melody = melody;
    }

    playMelody() {
        console.log(`🎵 ${this.name} the swan plays the ${this.instrument}: ${this.melody}`);
    }

    assignInstrument(newInstrument) {
        this.instrument = newInstrument;
        console.log(`${this.name}'s instrument has been changed to ${newInstrument}`);
    }

    assignMelody(newMelody) {
        this.melody = newMelody;
        console.log(`${this.name}'s melody has been updated`);
    }
}

class Symphony {
    constructor() {
        this.swans = [];
    }

    addSwan(name, instrument, id, melody) {
        const newSwan = new Swan(name, instrument, id, melody);
        this.swans.push(newSwan);
    }

    removeSwan(id) {
        this.swans = this.swans.filter(swan => swan.id !== id);
    }

    playGrandFinale() {
        console.log("The Grand Underwater Symphony Begins:");
        this.swans.forEach(swan => swan.playMelody());
    }
}

// Create a new symphony
let underwaterSymphony = new Symphony();

// Add some swans
underwaterSymphony.addSwan("Grace", "flute", 1, "Twinkle, twinkle, little star");
underwaterSymphony.addSwan("Lily", "piano", 2, "Do-Re-Mi");
underwaterSymphony.addSwan("Charlie", "cello", 3, "A-B-C-D-E");


// Find an existing swan (assuming you have one named 'Charlie')
let charlie = underwaterSymphony.swans.find(swan => swan.name === "Charlie");

// Change Charlie's instrument
charlie.assignInstrument("violin");

// Change Charlie's melody
charlie.assignMelody("E-F-G-A-B");

// Grand finale!
underwaterSymphony.playGrandFinale();