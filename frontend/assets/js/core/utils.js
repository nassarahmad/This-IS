function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function requireAuth() {
  if (!getUser()) {
    window.location.href = "index.html";
  }
}

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

$(document).ready(() => {

  protectPage();

  showLoader();

  setTimeout(() => {
    hideLoader();

    loadDashboard?.();
    loadLeaderboard?.();
  }, 500);

});