const codeforcesService = require("./codeforcesService");

async function syncUser(handle) {
  const user = await codeforcesService.getUserInfo(handle);

  return {
    handle,
    status: "fetched",
    user,
  };
}

module.exports = {
  syncUser,
};
