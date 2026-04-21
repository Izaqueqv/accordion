const labels = document.querySelectorAll(".box label");

labels.forEach(function (label) {
  label.addEventListener("click", function (e) {
    const inputId = e.currentTarget.getAttribute("for");
    const input = document.getElementById(inputId);

    if (input.checked) {
      input.checked = false;
      e.preventDefault();
    }
  });
});
