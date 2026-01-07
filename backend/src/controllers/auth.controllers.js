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

    await newUser.save();

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
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "E-mail ou senhas invalidos" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      res.status(401).json({ message: "Senha errada" });
    }

    res.status(200).json({
      _id: user._id,
      nome: user.nome,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    console.log("Error no login", error.message);
    res.status(500).json({ message: "Error interno no server" });
  }
};

export const routerUpdate = async (req, res) => {
  const { nome, email, password } = req.body;
  try {
    const updateData = { nome, email };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      {new: true,}
    );

    res.status(200).json({
      _id: updateUser._id,
      nome: updateUser.nome,
      email: updateUser.email
    });

  } catch (error) {
    console.log("Erro em Update", error);
    res.status(500).json({ message: "Erro interno" });
  }
};