import User from "../models/auth.model.js";
import bcrypt from "bcryptjs";

export const routerSignup = async (req, res) => {
  try {
    const { nome, email, password } = req.body;

    if (password < 6) {
      return res
        .status(400)
        .json({ message: "Senha tem que ter no minimo 6 caracteres" });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(409).json({ message: "E-mail já cadastrado." });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      nome,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        nome: newUser.nome,
        email: newUser.email,
        password: newUser.password,
      });
    } else {
      res.status(400).json({ message: "Dados invalidos" });
    }
  } catch (error) {
    console.log("Erro na Sigup", error);
  }
};

export const routerLogin = async (req, res) => {
  res.send("opa login");
};

export const routerLogout = async (req, res) => {
  res.send("opa lo");
};
