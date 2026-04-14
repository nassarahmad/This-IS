const API_URL = "http://localhost:5000/api/v1";

const cache = {};

async function api(endpoint, method = "GET", data = null) {

  const key = endpoint + JSON.stringify(data || {});

  if (method === "GET" && cache[key]) {
    return cache[key];
  }

  const res = await $.ajax({
    url: API_URL + endpoint,
    method,
    contentType: "application/json",
    xhrFields: { withCredentials: true },
    data: data ? JSON.stringify(data) : null
  });

  if (method === "GET") cache[key] = res;

  return res;
}