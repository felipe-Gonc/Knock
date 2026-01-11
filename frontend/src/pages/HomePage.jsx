import FormLogin from "../components/FormLogin";
import { useState } from "react";
import ImageComp from "../components/ImageComp";
import FormSignup from "../components/FormSignup";

const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative bg-[#2B2738] flex w-full max-w-5xl h-screen md:h-2/3 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-violet-950/20 to-transparent z-0" />
        <div className="relative z-10 flex w-full">
          <ImageComp />
          <div className="flex flex-col w-full md:w-1/2 items-center gap-5 md:justify-between p-3 md:p-6">

            {!show ? <FormLogin /> : <FormSignup />}

            <div className="text-xl cursor-default mb-5">
              {!show ? "Não possui registro, " : "Faça "}
              <button
                onClick={handleShow}
                className="text-[#5e45b5] cursor-pointer"
              >
                {!show ? "cadastre-se." : "Login"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
