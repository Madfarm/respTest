function checkForDuplicates(tableId: string) {
    const table = document.getElementById(tableId) as HTMLTableElement;
    if (!table) {
      console.error('Table not found');
      return;
    }
  
    const dataEntries: { location: string, dateTime: string }[] = [];
    const duplicates: { location: string, dateTime: string }[] = [];
  
    // Extract data from table rows
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const locationCell = row.querySelector('td.location-cell'); // Adjust selector as needed
      const dateTimeCell = row.querySelector('td.datetime-cell'); // Adjust selector as needed
  
      if (locationCell && dateTimeCell) {
        const location = locationCell.textContent?.trim();
        const dateTime = dateTimeCell.textContent?.trim();
  
        if (location && dateTime) {
          const entry = { location, dateTime };
  
          if (dataEntries.some(e => e.location === location && e.dateTime === dateTime)) {
            duplicates.push(entry);
          } else {
            dataEntries.push(entry);
          }
        }
      }
    });
  
    if (duplicates.length > 0) {
      console.log('Duplicates found:', duplicates);
      // Handle duplicates (e.g., highlight rows, display an alert, etc.)
    } else {
      console.log('No duplicates found.');
    }
  }

  type Entry = {
    location: string;
    beginningDateTime: Date;
};

class EntryManager {
    private entries: Entry[] = [];

    constructor() {}

    // Call this method to add a new entry
    public addEntry(newEntry: Entry): string {
        if (this.isDuplicate(newEntry)) {
            return 'Duplicate entry found!';
        } else {
            this.entries.push(newEntry);
            return 'Entry added successfully.';
        }
    }

    // Method to check for duplicates
    private isDuplicate(entryToCheck: Entry): boolean {
        return this.entries.some(entry =>
            entry.location === entryToCheck.location &&
            entry.beginningDateTime.getTime() === entryToCheck.beginningDateTime.getTime()
        );
    }
}

// Example usage:
let entryManager = new EntryManager();

console.log(entryManager.addEntry({location: 'New York', beginningDateTime: new Date('2023-04-01T10:00:00')})); // Entry added successfully.
console.log(entryManager.addEntry({location: 'New York', beginningDateTime: new Date('2023-04-01T10:00:00')})); // Duplicate entry found!