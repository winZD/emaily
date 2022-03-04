const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "You must be logged in" });
    }
    const charge = await stripe.charges.create({
      amount: 50,
      currency: "usd",
      description: "50 cent for 5 credit",
      source: req.body.id,
    });
    //console.log("CHARGE: ", charge);
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
