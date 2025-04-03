const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const successResponse = await UserService.registerUser(
      username,
      email,
      password
    );
    return res.status(201).json({
      status: true,
      success: "User registered successfully",
      data: successResponse,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const successResponse = await UserService.loginUser(email, password);
    return res.status(200).json({
      status: true,
      success: "User logged in successfully",
      token: successResponse.token,
      data: successResponse,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};
