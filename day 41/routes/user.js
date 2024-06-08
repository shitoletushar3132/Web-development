const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const {
  renderSignUpForm,
  signUp,
  renderLoginForm,
  logIn,
  logOut,
} = require("../controllers/users");

router.route("/signup").get(renderSignUpForm).post(wrapAsync(signUp));

router
  .route("/login")
  .get(renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    logIn
  );

router.get("/logout", logOut);

module.exports = router;
