let timeString = "09:30 PM'"; 

// 1. Remove spaces: 
let noSpaceTime = timeString.replace(/\s/g, ""); 

// 2. Remove PM:
let noPMTime = noSpaceTime.replace("PM", ""); 

// Output: 
console.log(noPMTime); // This will display "09:30" 