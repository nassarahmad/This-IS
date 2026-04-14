// auth
async function login() {
  const email = $("#email").val();
  const password = $("#password").val();

  const res = await api("/auth/login", "POST", {
    email,
    password
  });

  localStorage.setItem("user", JSON.stringify(res.user));

  window.location.href = "dashboard.html";
}

function logout() {
  api("/auth/logout", "POST").then(() => {
    localStorage.clear();
    window.location.href = "index.html";
  });
}


