function toggleText(textId, nextClickableId) {
    const textElement = document.getElementById(textId);
    if (textElement.style.display === 'none' || textElement.style.display === '') {
      textElement.style.display = 'block';
      setTimeout(() => textElement.style.opacity = '1', 10); // Small delay to ensure display is set before starting transition
  
      if (nextClickableId) {
        const nextClickable = document.getElementById(nextClickableId);
        nextClickable.style.display = 'block';
        setTimeout(() => nextClickable.style.opacity = '1', 10); // Reveal the next clickable element
      }
    } else {
      textElement.style.opacity = '0';
      setTimeout(() => textElement.style.display = 'none', 500); // Match the transition duration
    }
  }
  
  // Ensure the additional text and clickables are hidden on page load
  document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden-text, .hidden-clickable');
    hiddenElements.forEach(element => {
      element.style.display = 'none';
      element.style.opacity = '0';
    });
  });
  