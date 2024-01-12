const mainContainer = document.getElementById("main-container");
const navBtn = document.getElementById("nav-btn");
const items = document.querySelectorAll(".item");

/**
 * Toggles the specified CSS classes on mainContainer, navBtn, and items.
 */
function toggleClass() {
  // Toggle rotation class on the main container
  mainContainer.classList.toggle("rotate");

  // Toggle rotation class on the navigation button
  navBtn.classList.toggle("the-rotate");

  // Toggle navigation animation class on each navigation item
  items.forEach((item) => item.classList.toggle("nav-animation"));
}

// Add event listeners to close and burger-menu elements
document.getElementById("close").addEventListener("click", toggleClass);
document.getElementById("burger-menu").addEventListener("click", toggleClass);
