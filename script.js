function searchChannels() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const channelCards = document.querySelectorAll(".channel-card");

  channelCards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();
    if (title.includes(input) || description.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
