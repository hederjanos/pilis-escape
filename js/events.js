function filterEvents() {
  let searchInput = removeAccents(
    document.getElementById("search-input").value
  );
  let categoryFilter = removeAccents(
    document.getElementById("category-select").value
  );

  const eventCards = document.querySelectorAll(".event-card");

  eventCards.forEach((card) => {
    const title = removeAccents(card.querySelector(".heading-3").textContent);
    const categories = Array.from(
      card.querySelectorAll(".event-categories span")
    ).map((span) => removeAccents(span.textContent));

    let isVisible = true;

    if (searchInput && !title.includes(searchInput)) {
      isVisible = false;
    }
    if (categoryFilter && !categories.includes(categoryFilter)) {
      isVisible = false;
    }
    card.style.display = isVisible ? "" : "none";
  });
}

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
