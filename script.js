document.addEventListener('DOMContentLoaded', function () {
    const message = document.getElementById('message');
    const character = document.getElementById('character');
  
    // Display the message after the earth finishes rotating
    setTimeout(() => {
      message.style.opacity = 1;
    }, 3000);  // Display after 3 seconds for effect
  
    // Animate the character walking towards the Earth
    setTimeout(() => {
      character.style.animation = 'characterMove 2s forwards';
    }, 5000); // Start walking animation after 5 seconds
  });
  