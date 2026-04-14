// chat
const socket = io("http://localhost:5000");

function sendMessage(roomId) {
  const message = $("#msg").val();

  const user = getUser();

  socket.emit("send_message", {
    roomId,
    sender: user._id,
    message
  });

  $("#msg").val("");
}

socket.on("receive_message", (msg) => {
  $("#chatBox").append(`
    <div class="msg">
      <b>${msg.sender}</b>: ${msg.message}
    </div>
  `);
});