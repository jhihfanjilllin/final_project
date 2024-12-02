// Wait until the entire DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  
  // Select all elements with the class 'star' inside the 'ratings' container
  const stars = document.querySelectorAll(".ratings .star");
  
  // Variable to store the current rating value (number of stars clicked)
  let currentRating = 0;

  // Loop through each star and add a click event listener
  stars.forEach((star, index) => {
    
    // When a star is clicked
    star.addEventListener("click", () => {
      // Update currentRating based on the clicked star's position (index + 1)
      currentRating = index + 1;

      // Remove the 'selected' class from all stars to reset their appearance
      stars.forEach(s => s.classList.remove("selected"));

      // Add the 'selected' class to the clicked star and all stars before it
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }
    });
  });

  // Add a click event listener to the 'submit' button
  document.getElementById("submit").addEventListener("click", () => {
    // Get the value of the feedback comment input field and trim whitespace
    const message = document.getElementById("message").value.trim();

    // Check if a rating has been selected and a comment has been entered
    if (currentRating > 0 && message) {
      // Display an alert showing the user's rating and feedback comment
      alert(`Your feedback:\nRating: ${currentRating} star(s)\nComment: ${message}`);

      // Optionally, clear the form after submission:
      // Reset the comment input field
      document.getElementById("message").value = '';

      // Remove the 'selected' class from all stars to reset the rating
      stars.forEach(s => s.classList.remove("selected"));

      // Reset the currentRating to 0
      currentRating = 0;
    } else {
      // Alert the user if they didn't provide both a rating and a comment
      alert("Please leave a rating and a comment before submitting.");
    }
  });
});

