// Hide capital name
document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("capital").style.display = "none";
  });

  // Show capital name
  document.getElementById("show").addEventListener("click", function() {
    document.getElementById("capital").style.display = "block";
  });

  // Toggle capital name
  document.getElementById("toggle").addEventListener("click", function() {
    if (document.getElementById("capital").style.display === "none") {
      document.getElementById("capital").style.display = "block";
    } else {
      document.getElementById("capital").style.display = "none";
    }
  });

  // Highlight yellow on hover
  function highlightYellow(element) {
    element.classList.add("highlight-yellow");
  }

  // Remove highlight on mouseout
  function removeHighlight(element) {
    element.classList.remove("highlight-yellow");
  }

  // Highlight green on click
  function highlightGreen(element) {
    element.classList.add("highlight-green");
  }