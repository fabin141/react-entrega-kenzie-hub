import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { StyleLogin } from "./StyleLogin";
import { toast } from "react-toastify";

const Login = ({ setUser }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Requer E-mail").email(),
    password: yup.string().required("Requer senha"),
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
      .post("sessions", data)
      .then((response) => {
        console.log(response.data);
        setUser(response.data.user);
        navigate("/dashboard");
        localStorage.setItem("@token", response.data.token);
        localStorage.setItem("@id", response.data.user.id);
        toast.success("Login feito com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => toast.error(err.response.data.message));
  };


  return (
    <StyleLogin>
      <img src={Logo} alt="Logo" />
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="E-mail">E-mail</label>
          <input id="E-mail" placeholder="Email" {...register("email")} />
          <small>{errors.email?.message}</small>
          <label htmlFor="Password">Senha</label>
          <input
            id="Password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <small>{errors.password?.message}</small>
          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não possui uma consta?</span>
        <button onClick={() => navigate("/register")}>Cadastre-se</button>
      </div>
    </StyleLogin>
  );
};

export default Login;