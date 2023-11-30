import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api_base_url from "../../configurations/Config";
import OtpInput from 'react-otp-input';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const LoginPage = () => {
  const navigate = useNavigate();
  const [registration, setRegistration] = useState({ FirstName: "", LastName: "", PhoneNumber: "", EmailAddress: "", Password: "", VerificationCode: "" })
  const [login, setLogin] = useState({
    LoginEmail: "",
    LoginPassword: "",
  });
  const [timerKey, setTimerKey] = useState(0); // Key to reset the countdown timer

  const [isRegistrationButtonDisabled, setIsRegistrationButtonDisabled] = useState(false);
  const [isSendCodeButtonDisabled, setIsSendCodeButtonDisabled] = useState(false);

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
        toast.success("Muvaffaqqiyatli ro`yhatdan o`tdingiz !", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
          autoClose: 2000,
        });
      })
      .catch(error => {
        toast.error("Kodni xato kiritdingiz!", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
          autoClose: 2000,

        });
      })
    // }

  }

  function EventFalse(event) {
    event.preventDefault()
  }



  const handleClickOpen = () => {
    setIsRegistrationButtonDisabled(true);

    axios.post(api_base_url + "api/Registration/SendVerificationCode", { Email: registration.EmailAddress }, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        setIsRegistrationButtonDisabled(false);
        setOpen(true);
        toast.success("Emailingizga kod yuborildi !", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
          autoClose: 2000,
        });
      })
      .catch(error => {
        setIsRegistrationButtonDisabled(false);
        if (error.response && error.response.status >= 500) {
          toast.error("Serverda xatolik yuz berdi !", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
            autoClose: 2000,
          });
        } else {
          toast.error("Bu foydalanuvchi mavjud !", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
            autoClose: 2000,
          });
        }
        console.log(error);
      });


    setTimeout(() => {
      let sendCodeStyle = document.querySelector(".SendCodeAgain");
      if (sendCodeStyle) {
        sendCodeStyle.style.display = 'block';
      }
    }, 13000);
  };


  const SendCodeAgain = () => {
    setIsSendCodeButtonDisabled(true);
    setTimerKey((prevKey) => prevKey + 1); // Reset the timer

    axios.post(api_base_url + "api/Registration/SendVerificationCode", { Email: registration.EmailAddress }, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        setOpen(true);
        toast.success("Emailingizga kod yuborildi !", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
          autoClose: 7000,
        });
      })
      .catch(error => {
        setIsSendCodeButtonDisabled(false);
        if (error.response && error.response.status >= 500) {
          toast.error("Serverda xatolik yuz berdi !", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
            autoClose: 2000,
          });
        }
        else {
          toast.error("Bu foydalanuvchi mavjud !", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
            autoClose: 2000,
          });
        }
        console.log(error);
      });

    setTimeout(() => {
      setIsSendCodeButtonDisabled(false);

    }, 10000);

  }


  const handleClose = () => {
    setOpen(false);
  };


  return (

    <div className="login_container_cover">
      <ToastContainer className=".toast-message" />

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
            <input required onChange={e => setRegistration({ ...registration, FirstName: e.target.value })} type="text" placeholder="Ism" />
            <input required onChange={e => setRegistration({ ...registration, LastName: e.target.value })} type="text" placeholder="Familiya" />
            <input required onChange={e => setRegistration({ ...registration, PhoneNumber: e.target.value })} type="text" placeholder="Telefon raqam" />
            <input required onChange={e => setRegistration({ ...registration, EmailAddress: e.target.value })} type="email" placeholder="Email manzil" />
            <input required onChange={e => setRegistration({ ...registration, Password: e.target.value })} type="password" placeholder="Parol" />
            <button type="submit" onClick={handleClickOpen} disabled={isRegistrationButtonDisabled}>Ro'yxatdan o'tish</button>

          </form>
          <React.Fragment>

            <Dialog
              open={open}
              disableBackdropClick={true}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              className="register_dialog"
            >
              <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Emailga borgan tekshiruv kodini kiriting

                  <div className="countdown-timer">
                    <CountdownCircleTimer
                      key={timerKey}
                      isPlaying
                      duration={10}
                      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                      colorsTime={[7, 5, 2, 0]}
                    >
                      {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                    <button className="SendCodeAgain" disabled={isSendCodeButtonDisabled} onClick={SendCodeAgain}>Kodni qayta yuborish</button>
                  </div>

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