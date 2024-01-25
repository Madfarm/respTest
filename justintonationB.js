// Define the fundamental frequency (in this case, C4 at 256 Hz)
const fundamentalFreq = 256;

// Define the ratios for a justly intonated C major scale
const justIntonationRatios = {
  'C': 1/1,       // Unison (C)
  'D': 9/8,       // Major second (D)
  'E': 5/4,       // Major third (E)
  'F': 4/3,       // Perfect fourth (F)
  'G': 3/2,       // Perfect fifth (G)
  'A': 5/3,       // Major sixth (A)
  'B': 15/8,      // Major seventh (B)
  'C2': 2/1       // Octave (C)
};

// Create an instance of the AudioContext class
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to create an oscillator with a specific frequency ratio
function playTone(ratio) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  // Calculate the frequency of the note
  const frequency = fundamentalFreq * ratio;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  // Set the type of waveform for the oscillator. 'sine' is commonly used for musical tones.
  oscillator.type = 'sine';

  // Connect the oscillator to the gain node and then to the audio context's destination
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Start the oscillator
  oscillator.start();

  // Set a time for the note to stop playing
  oscillator.stop(audioContext.currentTime + 1); // Play for 1 second

  // Gradually reduce the volume to zero when stopping the note to avoid clicks
  gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime); // current value
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.95);

  // Stop and clean up the oscillator after it has finished playing
  oscillator.onended = function() {
    oscillator.disconnect();
    gainNode.disconnect();
  };
}

// Play each note in the C major scale in sequence
Object.values(justIntonationRatios).forEach((ratio, index) => {
  const startTime = audioContext.currentTime + (index * 1.5); // 1.5 seconds apart
  setTimeout(() => playTone(ratio), startTime * 1000); // setTimeout expects milliseconds
});