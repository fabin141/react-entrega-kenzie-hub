import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import api from "../../services/api";

import Logo from "../../assets/Logo.svg";
import { StyleRegister } from "./StyleRegister";

const Register = () => {
  const formSchema = yup.object({
    name: yup.string().required("Requer Nome"),
    email: yup.string().required("Requer E-mail").email("E-mail Inválido"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .required("Requer senha"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("Senha")],
        "A confirmação da senha deve ser igual à senha"
      ),
    bio: yup.string().required("Requer descrição"),
    contact: yup.string().required("Requer contato"),
    course_module: yup.string().required("Requer curso"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post(`users`, data)
      .then((response) => {
        console.log(response.data);
        toast.success("Registrado com sucesso!", { autoClose: 2000 });
        navigate("/");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  console.log(errors);

  return (
    <StyleRegister>
      <div>
        <img src={Logo} alt="Logo" />
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
      <div className="form">
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa!</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Name">Nome</label>
          <input id="Name" placeholder="Nome" {...register("name")} />
          <small>{errors.name?.message}</small>

          <label htmlFor="Email">E-mail</label>
          <input id="Email" placeholder="Email" {...register("email")} />
          <small>{errors.email?.message}</small>

          <label htmlFor="Password">Senha</label>
          <input
            type="password"
            id="Password"
            placeholder="Senha"
            {...register("password")}
          />
          <small>{errors.password?.message}</small>

          <input
            type="password"
            id="Password"
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
          />
          <small>{errors.confirmPassword?.message}</small>

          <label htmlFor="Bio">Bio</label>
          <input id="Bio" placeholder="Bio" {...register("bio")} />
          <small>{errors.bio?.message}</small>

          <label htmlFor="Contact">Contato</label>
          <input id="Contact" placeholder="Contato" {...register("contact")} />
          <small>{errors.contact?.message}</small>

          <label htmlFor="Select">Selecionar módulo</label>
          <select id="Select" {...register("course_module")}>
            <option value="Select">Selecione</option>
            <option value="M1">Módulo 1</option>
            <option value="M2">Módulo 2</option>
            <option value="M3">Módulo 3</option>
            <option value="M4">Módulo 4</option>
            <option value="M5">Módulo 5</option>
            <option value="M6">Módulo 6</option>
          </select>
          <small>{errors.course_module?.message}</small>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </StyleRegister>
  );
};

export default Register;