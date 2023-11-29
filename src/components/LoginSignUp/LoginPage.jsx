import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api_base_url from "../../configurations/Config";
import OtpInput from 'react-otp-input';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const [registration, setRegistration] = useState({ FirstName: "", LastName: "", PhoneNumber: "", EmailAddress: "", Password: "", VerificationCode: "" })
  const [login, setLogin] = useState({
    LoginEmail: "",
    LoginPassword: "",
  });
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState('');

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


  function RegisterUser() {
    // var IsVerified = axios.post(api_base_url + "api/Registration/register", {Email: registration.EmailAddress, VerificationCode: otp})
    //   .then(res => {
    //     alert("User is verified")
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })

    // if (IsVerified == true) {
    axios.post(api_base_url + "api/Registration/Register", registration)
      .then(res => {
        setOpen(false)
        alert("User is successfully registered")
      })
      .catch(error => {
        alert("User is not registered")
        setOpen(false)
        console.log(error);
      })
    // }

  }

  function EventFalse(event) {
    event.preventDefault()
  }



  const handleClickOpen = () => {
    var result = axios.post(api_base_url + "api/Registration/SendVerificationCode", { Email: registration.EmailAddress }, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        setOpen(true);
        alert("Verification code has been sent");
      })
      .catch(error => {
        console.log(error);
      });
    if (result === true) {

    }
  };



  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className="login_container_cover">
      <div className="login_container" id="container">
        {/* Sign Up */}
        <div className="form-container sign-up">
          <form onSubmit={EventFalse}>
            <h1>Ro`yhatdan o`tish</h1>
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
            <input onChange={e => setRegistration({ ...registration, FirstName: e.target.value })} type="text" placeholder="Ism" />
            <input onChange={e => setRegistration({ ...registration, LastName: e.target.value })} type="text" placeholder="Familiya" />
            <input onChange={e => setRegistration({ ...registration, PhoneNumber: e.target.value })} type="text" placeholder="Telefon raqam" />
            <input onChange={e => setRegistration({ ...registration, EmailAddress: e.target.value })} type="email" placeholder="Email manzil" />
            <input onChange={e => setRegistration({ ...registration, Password: e.target.value })} type="password" placeholder="Parol" />
            <button onClick={handleClickOpen}>Ro'yxatdan o'tish</button>
          </form>
          <React.Fragment>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Emailga borgan tekshiruv kodini kiriting
                  <OtpInput
                    value={otp}
                    onChange={otp => {
                      setOtp(otp);
                      setRegistration({ ...registration, VerificationCode: otp });
                    }}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props, index) => (
                      <input
                        {...props}
                        className="otp-input"
                        style={{
                          width: '2em',
                          height: '2em',
                          margin: '0 0.5em',
                          fontSize: '1.5em',
                          textAlign: 'center',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          outline: 'none',
                          // Add any additional styles as needed
                        }}
                      />
                    )}
                  />


                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Bekor qilish</Button>
                <Button autoFocus onClick={RegisterUser}>
                  Ro`yhatdan o`tish
                </Button>
              </DialogActions>
            </Dialog>

          </React.Fragment>
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
              placeholder="Telefon Raqam"
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
