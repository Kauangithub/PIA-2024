// Get the menu button, menu options, and toggle button elements
const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');
const toggleBtn = document.querySelector('#toggle-btn');

// Toggle the visibility of the menu options when the menu button is clicked
menuButton.addEventListener('click', () => {
  if (menuOptions.classList.contains('hidden')) {
    menuOptions.classList.remove('hidden');
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuOptions.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

// Hide the menu options when the user clicks outside of them
document.addEventListener('click', (event) => {
  if (event.target !== menuButton && !menuButton.contains(event.target)) {
    if (!menuOptions.classList.contains('hidden')) {
      menuOptions.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  }
});

// Get the date buttons, date popup, date picker, OK button, and Cancel button elements
const dateBtns = document.querySelectorAll('.date-btn');
const datePopup = document.querySelector('#date-popup');
const datePicker = document.querySelector('#date-picker');
const okBtn = document.querySelector('.ok-btn');
const cancelBtn = document.querySelector('.cancel-btn');

// Show the date popup when a date button is clicked
dateBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    datePopup.classList.remove('hidden');
  });
});

// Validate the selected date and log it to the console when the OK button is clicked
okBtn.addEventListener('click', () => {
  const selectedDate = datePicker.value;
  if (isValidDate(selectedDate)) {
    console.log(selectedDate);
    datePopup.classList.add('hidden');
  }
});

// Hide the date popup when the Cancel button is clicked
cancelBtn.addEventListener('click', () => {
  datePopup.classList.add('hidden');
});

// Hide the date popup when the user clicks outside of it
document.addEventListener('click', (event) => {
  if (event.target === datePopup) {
    datePopup.classList.add('hidden');
  }
});

// Toggle the visibility of the hidden section when the toggle button is clicked
toggleBtn.addEventListener('click', () => {
  hiddenSection.classList.toggle('hidden');
});

// Get the details buttons and add click event listeners to them
const detailsBtns = document.querySelectorAll('.details-btn');
detailsBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Display more details here
    alert('More details displayed');
  });
});

// Get the carousel and current slide elements
const carousel = document.querySelector('.carousel-inner');
let currentSlide = 0;

// Move the carousel to the next slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % carousel.children.length;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 5000);

// Get the popup button and popup elements
const popupBtn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');

// Show the popup when the mouse hovers over the popup button
popupBtn.addEventListener('mouseover', () => {
  popup.classList.remove('hidden');
});

// Hide the popup when the mouse leaves it
popup.addEventListener('mouseout', () => {
  popup.classList.add('hidden');
});

// Check if a date is valid
function isValidDate(date) {
  return date.match(/^\d{4}-\d{2}-\d{2}$/);
}
const stripe = Stripe('your_publishable_key_here');
const elements = stripe.elements();
const cardElement = elements.create('card');

cardElement.mount('#card-element');
if (cardElement.mounted) {
  console.log('The card element is mounted on the page');
} else {
  console.log('The card element is not mounted on the page');
}
const button = document.querySelector('button');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

popup.querySelector('.cancel-btn').addEventListener('click', () => {
  popup.style.display = 'none';
});
