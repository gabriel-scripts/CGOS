import { useNavigate } from "react-router-dom";
import "./login.css";

import Logo from "../../assets/cgos_logo.png";

export function Login() {

    const navigate = useNavigate();
    // JUST A TEST
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();

      const email = (document.getElementById("email") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
        
      if (email === "user@example.com" && password === "password") {
        localStorage.setItem("authenticated", "true");
        navigate("/"); 
      } else {
        alert("Invalid credentials");
      }
    };

    const HandleSkipLogin = (e: React.FormEvent) => {
        navigate("/");
    };

    return (
        <section>
            <main className="login-body">
                <div className="login-container">
                    <div id="login">
                        <img
                            className="image-logo"
                            src= { Logo }
                            alt="logo"
                        />
                    </div>
                    <div className="title-configuration">LOGIN</div>

                    <form id="entrar">

                        <input type="text" id="email" placeholder="email" required />
                        <i className="bi bi-envelope-fill"></i>

                        
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            required
                        />
                        <i className="bi bi-lock-fill"></i>
                        <p id="message"></p>

                        <button className="button-default-hover" type="submit">Sign in</button>

                        <div className="skip-register-div">

                            <div className="skip-button-div">
                                <button className="clear-button skip-button" onClick={HandleSkipLogin}>
                                    <p className="text-primary-color">skip login</p>
                                </button>
                            </div>
                            <div className="register-button-div">
                                <button className="clear-button register-button">    
                                    <p className="text-primary-color">create account</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}