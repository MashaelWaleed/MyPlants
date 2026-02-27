document.addEventListener("DOMContentLoaded", () => {
  const openSearchFromService = document.getElementById(
    "openSearchFromService",
  );
  const backToTopBtn = document.getElementById("backToTopBtn");
  const scrollContainer = document.querySelector(".scroll-page"); // 👈 your main container

  // open search reuse
  if (openSearchFromService && typeof openSearch !== "undefined") {
    openSearchFromService.addEventListener("click", () => {
      openSearch.click();
    });
  }

  if (!backToTopBtn || !scrollContainer) {
    console.error("❌ Missing elements");
    return;
  }

  console.log("✅ Back to top script loaded");

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
