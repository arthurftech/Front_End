import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import { IconField } from "primereact/iconfield";
import "primereact/resources/themes/saga-blue/theme.css";
import { Button } from "primereact/button";
import Logo from "./Logo";
import carrinho from "../assets/img/carrinho.png";
import "primeicons/primeicons.css";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import styled from "styled-components";

const Header = () => {
  const HeaderContainer = styled.header`
    margin: 0;
    padding: 0;
    & header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 0 100px;
    }
    & h5 {
      font-weight: 500;
    }
    & nav {
      padding: 0 45px;
      border-bottom: 1px solid #f5f5f5;
    }

    & nav ul {
      display: flex;
      justify-content: start;
      list-style: none;
    }
    & nav li {
      padding: 0 1rem;
    }

    & nav a {
      text-decoration: none;
      color: #666666;
      font-size: 1rem;
      font-weight: 450;
      border-bottom: 0.5px solid transparent;
      transition: border-color 0.3s ease;
      &:hover {
        color: #ee4266;
        padding-bottom: 5px;
        border-bottom: 0.5px solid #ee4266;
      }
    }
  `;
  return (
    <HeaderContainer>
      <header>
        <Logo />
        <div className="col-5">
          <IconField>
            <InputIcon className="pi pi-search" />
            <InputText
              className="w-full p-2"
              style={{ backgroundColor: "#f1f1f1" }}
            />
          </IconField>
        </div>
        <a href="/">
          <h5>Cadastre-se</h5>
        </a>
        <Button style={{ backgroundColor: "#C92071" }} className="px-5">
          Entrar
        </Button>
        <div>
          <img src={carrinho} />
        </div>
      </header>
      <nav>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>Produtos</li>
          </a>
          <a href="/">
            <li>Categorias</li>
          </a>
          <a href="/">
            <li>Meus Pedidos</li>
          </a>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
