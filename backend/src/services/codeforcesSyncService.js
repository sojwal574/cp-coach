const codeforcesService = require("./codeforcesService");
const userService = require("./userService");

async function syncUser(userId, handle) {
  const user = await codeforcesService.getUserInfo(handle);

  const updatedUser = await userService.updateCodeforcesProfile(
    userId,
    user.handle,
    user.rating,
    user.maxRating,
  );

  return {
    status: "synced",
    user: updatedUser,
    codeforces: user,
  };
}

module.exports = {
  syncUser,
};
