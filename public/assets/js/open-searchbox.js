window.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("#search-icon");
  const search_component = document.querySelector("#search-component");
  const back_btn = document.querySelector("#back-btn");

  search.addEventListener("click", () => {
    search_component.classList.add("open");
  });

  back_btn.addEventListener("click", () => {
    search_component.classList.remove("open");
  });
});
