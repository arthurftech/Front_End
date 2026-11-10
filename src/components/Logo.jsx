import logo from "../assets/img/logo.png";
const Logo = () => {
  return (
    <div>
      <a href="/">
        <img
          src={logo}
          style={{ width: "auto", height: "auto", margin: "0" }}
        />
      </a>
    </div>
  );
};

export default Logo;
