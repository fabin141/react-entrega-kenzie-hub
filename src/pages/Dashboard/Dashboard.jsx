import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import api from "../../services/api";
import { StyleDashboard } from "./StyleDashboard";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (!user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.get(`profile`).then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
    }
  }, []);

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyleDashboard>
      <header>
        <div className="header">
          <img src={Logo} alt="Logo" />
          <button onClick={() => Logout()}>Sair</button>
        </div>
      </header>
      <div className="information">
        <div className="bodyInformation">
          <h1>Olá, {user.name}!</h1>
          <p>Primeiro módulo  (Introdução ao Frontend)</p>
        </div>
      </div>
      <div className="description">
        <div className="bodyDescription">
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </div>
    </StyleDashboard>
  );
};

export default Dashboard;