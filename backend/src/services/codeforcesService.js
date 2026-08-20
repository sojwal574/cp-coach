const CODEFORCES_API_URL = "https://codeforces.com/api";

async function getUserInfo(handle) {
  const response = await fetch(
    `${CODEFORCES_API_URL}/user.info?handles=${encodeURIComponent(handle)}`,
  );

  if (!response.ok) {
    throw new Error("Codeforces API request failed");
  }

  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error(data.comment || "Codeforces API returned an error");
  }

  return data.result[0];
}

module.exports = {
  CODEFORCES_API_URL,
  getUserInfo,
};
