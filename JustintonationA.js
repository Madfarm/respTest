// Just Intonation Ratios (relative to a base frequency)
const ratios = {
    unison: 1/1,
    fifth: 3/2,
    majorThird: 5/4,
    // You can add more ratios for other intervals
  };
  
  // Base frequency
  const baseFrequency = 261.63; // Middle C
  
  // Web Audio Setup
  const audioCtx = new AudioContext();
  
  function playNote(intervalRatio, duration = 0.5) {
    const frequency = baseFrequency * intervalRatio;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
  
    oscillator.type = 'sine'; // Pure tone for Just Intonation
    oscillator.frequency.value = frequency;
  
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // Adjust volume if needed
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration); 
  
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  }
  
  // Example usage: Play a major triad
  playNote(ratios.unison); 
  playNote(ratios.majorThird);
  playNote(ratios.fifth);