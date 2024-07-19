document.addEventListener("DOMContentLoaded", function () {
  const tabItems = document.querySelectorAll(".item-front");
  const tabPanes = document.querySelectorAll(".tab-content-front");

  tabItems.forEach((tab, tabIndex) => {
    tab.addEventListener("click", function () {
      tabItems.forEach((btn) => {
        btn.classList.toggle("open-front", btn === this);
      });

      tabPanes.forEach((pane, index) => {
        pane.style.display = index === tabIndex ? "block" : "none";
      });
    });
  });

  // Initialize the first tab as active
  tabItems.length > 0 && tabItems[0].click();
});
