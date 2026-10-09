const stateCollege = [40.7934, -77.8600];

const map = L.map("map").setView(stateCollege, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker(stateCollege).addTo(map);

function placeMarker(latitude, longitude) {
  const coordinates = [latitude, longitude];
  L.marker(coordinates).addTo(map);
  map.setView(coordinates, map.getZoom());
}

document.getElementById("coordinate-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const latitude = Number(document.getElementById("latitude").value);
  const longitude = Number(document.getElementById("longitude").value);
  const message = document.getElementById("coordinate-message");

  if (
    !Number.isFinite(latitude) || latitude < -90 || latitude > 90 ||
    !Number.isFinite(longitude) || longitude < -180 || longitude > 180
  ) {
    message.textContent = "Enter a latitude from -90 to 90 and a longitude from -180 to 180.";
    return;
  }

  message.textContent = "";
  placeMarker(latitude, longitude);
});
