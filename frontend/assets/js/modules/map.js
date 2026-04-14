// map
const map = L.map('map').setView([31.95, 35.91], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const markers = {};

const socket = io("http://localhost:5000");

socket.on("receive_location", (data) => {

  if (!markers[data.userId]) {
    markers[data.userId] = L.marker([data.lat, data.lng]).addTo(map);
  } else {
    markers[data.userId].setLatLng([data.lat, data.lng]);
  }

});

setInterval(() => {

  navigator.geolocation.getCurrentPosition((pos) => {

    socket.emit("send_location", {
      userId: getUser()._id,
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    });

  });

}, 3000);