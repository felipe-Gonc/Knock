import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import InputsEdit from "./InputsEdit";
import Description from "./Description";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormSignup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(1);
      if (!validEmail(form.email)) {
        return alert("E-mail inválido");
      }

      console.log(2);
      const res = await axios.post("http://localhost:5001/api/auth/signup", {
        nome: form.nome ? `${form.nome} ${form.sobrenome}` : form.sobrenome,
        email: form.email,
        password: form.senha,
      });

      navigate(`/home/${res.data._id}`)
    } catch (error) {
      console.log("Erro na Sigup", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-8 md:gap-20 items-center"
    >
      <Description text={"Sing in"} />
      <div className="flex flex-col w-full mt-12 items-center gap-4">
        <div className="flex relative w-full flex-col md:flex-row gap-4">
          <InputsEdit
            icon={<User className="size-7 ml-3 absolute" />}
            type={"text"}
            place={"Nome"}
            value={form.nome}
            onChange={(e) =>
              setForm({
                ...form,
                nome: e.target.value,
              })
            }
          />
          <InputsEdit
            icon={<User className="size-7 ml-3 absolute" />}
            type={"text"}
            place={"Sobrenome"}
            value={form.sobrenome}
            onChange={(e) =>
              setForm({
                ...form,
                sobrenome: e.target.value,
              })
            }
          />
        </div>
        <InputsEdit
          icon={<Mail className="size-6 ml-4 text-gray-300  absolute" />}
          type={"text"}
          place={"E-mail"}
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
        <InputsEdit
          icon={<Lock className="size-6 ml-4 text-gray-300 absolute" />}
          type={"Password"}
          place={"Senha"}
          value={form.senha}
          onChange={(e) =>
            setForm({
              ...form,
              senha: e.target.value,
            })
          }
        />
        <button
          type="submit"
          className="w-full h-12 bg-[#382c63] font-tilt text-xl hover:bg-[#463a75] transition-colors duration-300 rounded-md font-medium"
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
};

export default FormSignup;

/* 



*/
