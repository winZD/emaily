//keys.js figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  //return the prod set of keys
  module.exports = require("./dev");
} else {
  //return the dev set of keys
  module.exports = require("./dev"); //
}
