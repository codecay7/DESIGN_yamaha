gsap.from(".box", {
  opacity: 0,
  // x: "50%",
  y: "500px",
  duration: 0.7,
  delay: 0.5,
  // repeat: -1,
  yoyo: true,
  stagger: 1

})
gsap.from(".box h2", {
  opacity: 0,
  // x: "50%",
  y: "700px",
  duration: 0.7,
  delay: 0.5,
  // repeat: -1,
  yoyo: true
  , stagger: 1
})

gsap.from(".videosection video", {
  opacity: 0,
  // x: "50%",
  // y: "700px",
  duration: 3,
  // delay: 1,
  // repeat: -1,
  yoyo: true

})
gsap.from(".tagline h1", {
  opacity: 0,

  // y: "700px",
  duration: 1,
  delay: 6,
  // repeat: -1,
  yoyo: true

})

// script.js

// Select the menu icon, close icon, and the popup navlinks container
const menuIcon = document.querySelector('.navlinks i');
const closeIcon = document.querySelector('.popup-navlinks i');
const popupNavLinks = document.querySelector('.popup-navlinks');

// Function to toggle the popup navlinks visibility
function toggleNavLinks() {
  if (popupNavLinks.style.display === 'flex') {
    popupNavLinks.style.display = 'none';
  } else {
    popupNavLinks.style.display = 'flex';
  }
}

// Add a click event listener to the menu icon to open the popup
menuIcon.addEventListener('click', toggleNavLinks);

// Add a click event listener to the close icon to close the popup
closeIcon.addEventListener('click', () => {
  popupNavLinks.style.display = 'none';
});


// ...........................................................
const scrollableSection = document.getElementById('scrollable-section');

scrollableSection.addEventListener('wheel', (event) => {
  const isAtStart = scrollableSection.scrollLeft === 0;
  const isAtEnd = scrollableSection.scrollLeft + scrollableSection.clientWidth === scrollableSection.scrollWidth;

  if (event.deltaY !== 0 && !isAtStart && !isAtEnd) {
    event.preventDefault();
    scrollableSection.scrollLeft += event.deltaY;
  }
});








// Set the current year in the copyright notice
document.getElementById("year").textContent = new Date().getFullYear();






