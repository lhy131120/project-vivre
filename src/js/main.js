console.log("main.js run");
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".header .close-btn");
  const collapse = document.querySelector(".header .collapse");

  closeBtn.addEventListener("click", () => {
    collapse.classList.toggle("show");
    closeBtn.classList.toggle("open");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !collapse.contains(e.target) &&
      !closeBtn.contains(e.target) &&
      collapse.classList.contains("show")
    ) {
      collapse.classList.remove("show");
      closeBtn.classList.remove("open");
    }
  });

  // Close menu on window resize if larger than mobile breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98 && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
      closeBtn.classList.remove("open");
    }
  });

  const showArticleBtn = document.querySelector(".showArticle");
  const showHiddenContent = document.querySelector(".showHiddenContent");
  const blogSection = document.querySelector(".blog");

  if(!showArticleBtn, !showHiddenContent, !blogSection) return;

  showArticleBtn.addEventListener("click",() => {

    if(blogSection.classList.contains("collapsed")) {
      blogSection.style.maxHeight = blogSection.scrollHeight + "px";
      blogSection.classList.remove("collapsed");
      blogSection.classList.add("expanded");

      if(showHiddenContent) {
        showHiddenContent.classList.add("hidden");
      }

      blogSection.addEventListener("transitionend", () => {
        blogSection.style.maxHeight = "none";
      }, { once: true });
    }
  })
 
  // swiper

  const swiper = new Swiper(".cardWrap", {
    direction: "horizontal",
    grid: {
      rows:1
    },
    spaceBetween: 24,
    slidePerView: 1,
    breakpoints: {
      992: {
        grid: {
          rows: 3,
          fill: "row",
        },
      },
    },
  });
});
