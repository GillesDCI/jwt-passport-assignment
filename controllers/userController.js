import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../helpers/authenticationHelper.js";

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user == null) {
    return res
      .status(400)
      .json({ message: "User with that email was not found" });
  }

  //sign in the user
  try {
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (checkPassword) {
      // Generate JWT token
      const token = generateToken(user);
      return res.status(200).json({ token });
    } else {
      return res.status(400).json({ message: "Passwords not matching" });
    }
  } catch (error) {
    return res.status(400).json({message:'Error happened'})
  }
};

export const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(200).json({ message: "User Created" });
  } catch (error) {
    console.log("the error is", error);
    res
      .status(400)
      .json({ message: "Something went wrong creating user", error: error });
  }
};
