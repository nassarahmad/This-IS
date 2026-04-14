// xp calculator
module.exports = (user, action) => {

  let xp = user.xp || 0;

  if (action === "request_completed") xp += 50;
  if (action === "help_given") xp += 30;
  if (action === "login") xp += 5;

  let level = Math.floor(xp / 100) + 1;

  return { xp, level };
};