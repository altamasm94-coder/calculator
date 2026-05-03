document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.querySelector(".search button");
  const searchInput = document.querySelector(".search input");
  const allNotes = document.querySelectorAll(".note-card");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query) {
      allNotes.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
          card.style.display = "flex"; // show matching card
        } else {
          card.style.display = "none"; // hide non-matching card
        }
      });
    } else {
      alert("Please enter a search term!");
    }
  });

  // --- Upload Notes Simulation ---
  const uploadBtn = document.querySelector(".upload");
  uploadBtn.addEventListener("click", () => {
    alert("Upload form will appear here (to be built later).");
  });

  // --- Browse Notes Simulation ---
  const browseBtn = document.querySelector(".browse");
  browseBtn.addEventListener("click", () => {
    alert("Browsing notes... (to be implemented)");
  });

  // --- Request Notes ---
  const requestBtn = document.querySelector(".request button");
  const requestInput = document.querySelector(".request input");

  requestBtn.addEventListener("click", () => {
    const requestText = requestInput.value.trim();
    if (requestText) {
      alert(`Your request has been submitted: ${requestText}`);
      requestInput.value = ""; // clear the input after submission
    } else {
      alert("Please enter a request before submitting.");
    }
  });

  // --- Recently Uploaded Notes (Dynamic Example) ---
  const recentNotesSection = document.querySelector(".recent-notes");
  const newNoteBtn = document.createElement("button");
  newNoteBtn.textContent = "Add Sample Note";
  newNoteBtn.style.marginTop = "10px";
  recentNotesSection.appendChild(newNoteBtn);

  newNoteBtn.addEventListener("click", () => {
    const newCard = document.createElement("div");
    newCard.classList.add("note-card");
    newCard.innerHTML = `
      <img src="images/dbms.jpg" alt="New Note">
      <p>New Sample Note – Added Now</p>
      <span>Uploaded just now</span>
    `;
    recentNotesSection.appendChild(newCard);
  });
});
