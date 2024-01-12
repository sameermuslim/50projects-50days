// Select all card elements on the page
const cards = document.querySelectorAll(".card");

/**
 * Attach a click event listener to each card element.
 * When a card is clicked, it becomes the active card, and all others lose the "active" status.
 */
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Reset the "active" status for all cards
    resetActiveStatus();

    // Mark the clicked card as active
    card.classList.add("active");
  });
});

/**
 * Reset the "active" status for all cards.
 * This function removes the "active" class from all card elements.
 */
function resetActiveStatus() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
