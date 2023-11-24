import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    LoginEmail: "",
    LoginPassword: "",
  });

  const GetLoginInfo = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const CheckAuth = (e) => {
    e.preventDefault();
    var errorMessage = document.querySelector(".error_message");
    if (
      login.LoginEmail === "hello@gmail.com" &&
      login.LoginPassword === "222"
    ) {
      navigate("/bosh-sahifa");
    } else {
      errorMessage.style.display = "block";
    }
  };

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (container && registerBtn && loginBtn) {
      registerBtn.addEventListener("click", () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
      });
    }

    // Cleanup event listeners when the component is unmounted
    return () => {
      if (registerBtn) {
        registerBtn.removeEventListener("click", () => {
          container.classList.add("active");
        });
      }
      if (loginBtn) {
        loginBtn.removeEventListener("click", () => {
          container.classList.remove("active");
        });
      }
    };
  }, []);
  return (
    <div className="login_container_cover">
      <div className="login_container" id="container">
        {/* Sign Up */}
        <div className="form-container sign-up">
          <form>
            <h1>Akkaunt yaratish</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>yoki o'zingizning e-mailingizdan foydalaning</span>
            <input type="text" placeholder="Ism" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Parol" />
            <button>Ro'yxatdan o'tish</button>
          </form>
        </div>
        {/* Sign Up */}

        {/* Login */}
        <div className="form-container sign-in">
          <form>
            <h1>Kirish</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>yoki o'zingizning e-mailingizdan foydalaning</span>
            <input
              name="LoginEmail"
              onChange={GetLoginInfo}
              type="email"
              placeholder="Email"
            />
            <input
              name="LoginPassword"
              onChange={GetLoginInfo}
              type="password"
              placeholder="Parol"
            />
            <h3 className="error_message">Email yoki parol noto`g`ri</h3>
            <a href="#">Parolni unutdingizmi?</a>
            <button onClick={CheckAuth}>Kirish</button>
          </form>
        </div>

        {/* Login */}

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Xush kelibsiz!</h1>
              <p>
                Ro'yxatdan o'tayotganingiz uchun minnatdorchilik bildiramiz!
              </p>
              <button id="login">
                Kirish
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Assalomu alaykum!</h1>
              <p>
                Saytning barcha imkoniyatlaridan foydalanish uchun shaxsiy
                ma'lumotlaringiz bilan ro'yxatdan o'ting.
              </p>
              <button id="register">
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
