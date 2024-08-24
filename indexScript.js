function cases_toggleCases() {
  const casesExtraCases = document.querySelector('.cases__extra-cases');
  const casesToggleButton = document.querySelector('.cases__toggle-button');
  if (casesExtraCases.style.height === '0px' || casesExtraCases.style.height === '') {
      casesExtraCases.style.display = 'flex';
      setTimeout(() => {
          casesExtraCases.style.height = '300px'; // Set fixed height
          casesExtraCases.style.opacity = '1'; // Fade in
      }, 10); // Small delay for proper transition
      casesToggleButton.textContent = 'Скрыть дела';
  } else {
      casesExtraCases.style.height = '0';
      casesExtraCases.style.opacity = '0';
      setTimeout(() => {
          casesExtraCases.style.display = 'none';
      }, 500); // Wait for animation to complete
      casesToggleButton.textContent = 'Больше дел';
  }
}