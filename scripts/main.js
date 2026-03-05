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

//check user icon

document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("userIcon");
  const loginBtn = document.getElementById("loginBtn");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // 🎯 1. Control login button visibility
  if (loginBtn) {
    loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
  }

  // 🎯 2. Control user icon visibility safely
  if (userIcon) {
    if (isLoggedIn) {
      userIcon.style.display = "flex";
      // navigate to profile
      userIcon.addEventListener("click", () => {
        window.location.href = "./pages/profile.html";
      });
    } else {
      userIcon.style.display = "hide";
    }
  }
});

// --- Hamburger Menu Toggle ---
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    // Toggles the "X" animation on the icon
    hamburger.classList.toggle("active");
    // Slides the menu in and out
    navLinks.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const scrollContainer = document.querySelector(".scroll-page"); // 👈 your main container

  if (!backToTopBtn || !scrollContainer) {
    return; // Fails silently and safely moves on!
  }

  // 🔥 listen to container scroll instead of window
  scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollTop > 600) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // 🔼 scroll back to top of container
  backToTopBtn.addEventListener("click", () => {
    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
