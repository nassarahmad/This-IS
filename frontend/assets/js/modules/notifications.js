// notifications
const socket = io("http://localhost:5000");

socket.on("receive_notification", (data) => {

  $("body").append(`
    <div class="notif">
      🔔 ${data.message}
    </div>
  `);

  const audio = new Audio("/assets/sounds/notify.mp3");
  audio.play();
});