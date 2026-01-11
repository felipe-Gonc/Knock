import { ChevronLeft, Mail, User } from "lucide-react";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import InputsEdit from "../components/InputsEdit";
import Campoinfo from "../components/Campoinfo";
import CreatedBy from "../components/CreatedBy";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditing, setEditing] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/auth/user/${id}`
        );
        setUser(res.data);
      } catch (error) {
        console.log("Erro na busca do usuário", error);
      }
    };
    getUser();
  }, [id]);

  const handleEdit = () => {
    setEditing(!isEditing);
  };

  const updateInfo = async () => {
    try {
      const infosLoad = {
        nome: form.nome || user.nome,
        email: form.email || user.email,
      };
      const res = await axios.put(
        `http://localhost:5001/api/auth/update/${id}`,
        infosLoad
      );

      setUser(res.data);
      setEditing(!isEditing);
    } catch (error) {
      console.log("Erro ao atualizar usuário", error);
    }
  };

  const deleteUser = async () => {
    alert("Tem certeza de que deseja deletar o User?");
    try {
      await axios
        .delete(`http://localhost:5001/api/auth/delete/${id}`)
        .then(navigate("/"));
    } catch (error) {
      console.log("erro no deleteUser", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative bg-[#2B2738] flex flex-col w-full text-center max-w-5xl h-screen md:h-2/3 rounded-md overflow-hidden p-2 md:p-3">
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-violet-950/20 to-transparent z-0" />
        <NavBar />
        <div className="flex flex-col md:flex-row flex-1 gap-4 p-4 justify-between items-center">
          <div className="flex justify-center ">
            <div className="w-auto h-auto p-3 rounded-full  bg-[#3e304d]">
              <img
                src="/fotoPerfil.jpg"
                alt="Imagem decorativa"
                className="size-auto max-h-72 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 w-full font-tilt flex flex-col gap-7 text-start text-xl">
            {/* Campo infos */}
            <div className="">
              <a
                href="/"
                className="text-end relative hover:text-[#463a75] transition-colors duration-300 flex gap-2 items-center justify-end group-hover:cursor-pointer"
              >
                <ChevronLeft />
                volta
              </a>
            </div>
            <div>
              {isEditing ? (
                <div className="flex flex-col gap-1">
                  <p className="text-2xl ml-2">Nome</p>
                  <InputsEdit
                    icon={<User className="size-7 ml-3 absolute" />}
                    type={"text"}
                    place={user?.nome}
                    value={form.nome}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        nome: e.target.value,
                      })
                    }
                  />
                  <p className="text-2xl ml-2">E-mail</p>
                  <InputsEdit
                    icon={
                      <Mail className="size-6 ml-4 text-gray-300  absolute" />
                    }
                    type={"text"}
                    place={user?.email}
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Campoinfo title={"Nome"} info={user?.nome} />
                  <Campoinfo title={"E-mail"} info={user?.email} />
                </div>
              )}
            </div>

            {/* Campo botão */}
            <div className="flex flex-col relative md:flex-row gap-4">
              <button
                onClick={isEditing ? handleEdit : deleteUser}
                className="w-full h-12 bg-transparent border-4 border-double border-[#5f5b71] hover:bg-[#463a75] transition-colors duration-300 font-tilt text-xl rounded-md font-medium"
              >
                {isEditing ? "Volta" : "Excluir Conta"}
              </button>
              <button
                onClick={isEditing ? updateInfo : handleEdit}
                className="w-full h-12 bg-[#382c63] font-tilt text-xl hover:bg-[#463a75] transition-colors duration-300 rounded-md font-medium"
              >
                {isEditing ? "Salva" : "Editar"}
              </button>
            </div>
          </div>
        </div>
        <CreatedBy />
      </div>
    </div>
  );
};

export default Home;
