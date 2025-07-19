exports.getLogin = async (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    formCSS: true,
    authCSS: true,
    isAuthenticated: req.isLoggedIn,
  });
};

exports.postLogin = async (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
