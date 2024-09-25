function cases_toggleCases() {
  const casesExtraCases = document.querySelector(".cases__extra-cases");
  const casesToggleButton = document.querySelector(".cases__toggle-button");
  if (
    casesExtraCases.style.height === "0px" ||
    casesExtraCases.style.height === ""
  ) {
    casesExtraCases.style.display = "flex";
    setTimeout(() => {
      casesExtraCases.style.height = "300px"; // Set fixed height
      casesExtraCases.style.opacity = "1"; // Fade in
    }, 10); // Small delay for proper transition
    casesToggleButton.textContent = "Скрыть дела";
  } else {
    casesExtraCases.style.height = "0";
    casesExtraCases.style.opacity = "0";
    setTimeout(() => {
      casesExtraCases.style.display = "none";
    }, 500); // Wait for animation to complete
    casesToggleButton.textContent = "Больше дел";
  }
}

// Получаем все элементы с классом icon_rotate
const iconContainers = document.querySelectorAll(".icon_rotate");

// Проходим по каждому элементу и добавляем обработчик события "клик"
iconContainers.forEach(function (iconContainer) {
  iconContainer.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    // Находим иконку внутри текущего элемента
    const icon = iconContainer.querySelector(".fa-caret-down");
    // Переключаем класс on-click-rotated для иконки
    icon.classList.toggle("on-click-rotated");
  });
});



// модалка


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const openModalButton = document.querySelector('.header__button');
  const closeModalOverlay = document.querySelector('.modal__overlay');


  function openModal() {
      modal.style.display = 'flex';
  }

  function closeModal() {
      modal.style.display = 'none';
  }


  openModalButton.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
  });

  closeModalOverlay.addEventListener('click', closeModal);
});

