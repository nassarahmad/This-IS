// dashboard
async function loadDashboard() {
  const data = await api("/admin/dashboard");

  $("#users").text(data.users);
  $("#requests").text(data.requests);

  renderChart(data);
}

function renderChart(data) {
  new Chart($("#chart"), {
    type: "bar",
    data: {
      labels: ["Users", "Requests"],
      datasets: [{
        label: "Stats",
        data: [data.users, data.requests]
      }]
    }
  });
}