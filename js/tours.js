function filterTours() {
  let searchInput = removeAccents(
    document.getElementById("search-input").value
  );
  let locationFilter = removeAccents(
    document.getElementById("location-select").value
  );
  let difficultyFilter = removeAccents(
    document.getElementById("difficulty-select").value
  );
  let minLength = document.getElementById("min-length-input").value;
  let maxLength = document.getElementById("max-length-input").value;
  let minGain = document.getElementById("min-gain-input").value;
  let maxGain = document.getElementById("max-gain-input").value;

  let rows = document.querySelectorAll("#tours-table tbody tr");

  rows.forEach((row) => {
    let tourName = removeAccents(row.cells[0].textContent);
    let location = removeAccents(row.cells[1].textContent);
    let difficulty = removeAccents(row.cells[2].textContent);
    let length = parseFloat(row.cells[3].textContent.trim());
    let gain = parseFloat(row.cells[4].textContent.trim());

    let isVisible = true;

    if (searchInput && !tourName.includes(searchInput)) {
      isVisible = false;
    }
    if (locationFilter && location !== locationFilter) {
      isVisible = false;
    }
    if (difficultyFilter && difficulty !== difficultyFilter) {
      isVisible = false;
    }
    if (minLength && length < parseFloat(minLength)) {
      isVisible = false;
    }
    if (maxLength && length > parseFloat(maxLength)) {
      isVisible = false;
    }
    if (minGain && gain < parseFloat(minGain)) {
      isVisible = false;
    }
    if (maxGain && gain > parseFloat(maxGain)) {
      isVisible = false;
    }

    row.style.display = isVisible ? "" : "none";
  });
}

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.classList.add("highlighted");
      setTimeout(() => {
        target.classList.remove("highlighted");
        history.replaceState(null, null, " ");
      }, 3000);
    }
  }
});
