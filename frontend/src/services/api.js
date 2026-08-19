const API_BASE_URL = "http://localhost:5000/api";

async function request(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function getHealth() {
  return request("/health");
}

export function getProblems() {
  return request("/problems");
}
