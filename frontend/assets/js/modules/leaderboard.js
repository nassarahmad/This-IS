// leaderboard
async function loadLeaderboard() {
  const users = await api("/users");

  users.sort((a, b) => b.xp - a.xp);

  $("#leaderboard").html("");

  users.slice(0, 10).forEach((u, i) => {
    $("#leaderboard").append(`
      <div>#${i + 1} ${u.name} - XP: ${u.xp}</div>
    `);
  });
}