// teams
const API = 'http://localhost:3000/api/teams';

async function getTeams(){
  const res = await fetch(API, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  });
  const data = await res.json();

  const container = document.getElementById('teams');
  container.innerHTML = data.map(t => `<div>${t.name}</div>`).join('');
}

async function createTeam(){
  const name = prompt("Team name");

  await fetch(API, {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      Authorization:'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({ name })
  });

  getTeams();
}

window.onload = getTeams;