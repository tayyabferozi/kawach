function toggleDropdown(e) {
  document.querySelectorAll(".dropdown").forEach((item) => {
    item.classList.remove("show");
  });
  e.target.classList.add("show");
}

document.querySelectorAll(".dropdown").forEach((item) => {
  item.addEventListener("click", function (e) {
    toggleDropdown(e);
  });
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.querySelectorAll("#navbar .item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".tab-content").forEach((el) => {
      el.classList.remove("show");
    });
    document.querySelectorAll("#navbar .item").forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");

    let tab = this.getAttribute("data-toggle");

    let tabEl = document.querySelector(tab);
    if (tabEl) {
      tabEl.classList.add("show");
    }
  });
});
