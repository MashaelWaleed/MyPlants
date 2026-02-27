const openSearch = document.getElementById("openSearch");
const overlay = document.getElementById("searchOverlay");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

// open overlay
openSearch.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.add("active");
  searchInput.focus();
});

// close overlay when clicking outside
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

// search button
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query !== "") {
    // go to products page with query
    window.location.href = `/pages/products.html?search=${encodeURIComponent(query)}`;
  }
});

// press Enter to search
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

