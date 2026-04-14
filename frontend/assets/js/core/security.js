function protectPage() {
  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "index.html";
  }
}

function roleGuard(role) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.role !== role) {
    window.location.href = "dashboard.html";
  }
}