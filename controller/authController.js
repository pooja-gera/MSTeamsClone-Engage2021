const userModel = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY ="vefoingetoi;gnoeitnhoiwrtbvraw;o";

async function signup(req, res) {
  try {
    let user = req.body;
    console.log(req.body)
    let newUser = await userModel.create({
      name: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
     
    });
   const token = jwt.sign({ id: newUser["_id"] }, SECRET_KEY);
    res.cookie("jwt", token, { httpOnly: true });

    res.status(201).json({
      message: "Succesfully Signed up !!",
      data: newUser,
    });
  } catch (error) {
    res.status(501).json({
      message: "Failed to sign up !!",
      error,
    });
  }
}

async function login(req, res) {
  try {
    let { email, password } = req.body;
    let loggedInUser = await userModel.find({ email: email });
    if (loggedInUser.length) {
      let user = loggedInUser[0];
      if (user.password == password) {
        // token ban na chahie
        const token = jwt.sign({ id: user["_id"] }, SECRET_KEY);

        res.cookie("jwt", token, { httpOnly: true });
        res.status(200).json({
          message: "Logged in succesfully !!",
          data: loggedInUser[0],
        });
        // res.redirect("/");
      } else {
        res.status(200).json({
          message: "Email and Password didn't Matched !!",
        });
      }
    } else {
      res.status(200).json({
        message: "No User Found SignUp First",
      });
    }
  } catch (error) {
    res.status(200).json({
      message: "Login Failed !!",
      error,
    });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("jwt");
    res.redirect("/");
  } catch (error) {
    res.status(501).json({
      error,
    });
  }
}


async function protectRoute(req, res, next) {
  try {
    const token = req.cookies.jwt;
    console.log("Inside protectRoute function");
    const payload = jwt.verify(token, SECRET_KEY);
    console.log(payload);
    if (payload) {
      req.id = payload.id;
      next();
    } else {
        res.redirect(`/`)
    }
  } catch (error) {
    res.redirect(`/`)
  }
}

async function isLoggedIn(req, res, next) {
  try {
    let token = req.cookies.jwt;
    const payload = jwt.verify(token, SECRET_KEY);
    if (payload) {
      let user = await userModel.findById(payload.id);
      req.name = user.name;
      next();
    } else {
      next();
    }
  } catch (error) {
    next();
  }
}

module.exports.signup = signup;
module.exports.login = login;
module.exports.logout = logout;
module.exports.protectRoute = protectRoute;
module.exports.isLoggedIn = isLoggedIn
