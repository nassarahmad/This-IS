window.onerror = function (msg, url, line) {
  console.log("Error:", msg);

  $("body").append(`
    <div class="error-box">
      Something went wrong ⚠️
    </div>
  `);
};