/* eslint-disable react/prop-types */
import "./index.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { supabase } from "supabaseClient/client";
import { useAuth } from "context/User";

export function AuthForm() {
  const [emailSended, setEmailSended] = useState(false);
  const { setUser } = useAuth();
  const handlerMagiclink = async (userEmail) => {
    try {
      const { data } = await supabase.auth.signInWithOtp({
        email: userEmail,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          emailRedirectTo: "https://lealdos.github.io/TodoAppJS/",
        },
      });
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    await handlerMagiclink(formValues.email);
    setEmailSended(true);
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://lealdos.github.io/TodoAppJS/",
      },
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://lealdos.github.io/TodoAppJS/",
      },
    });
  };
  return (
    <div className="login">
      {emailSended ? (
        <div className="authForm">
          <h1>check your email</h1>
        </div>
      ) : (
        <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
          <img
            src="https://cdn.discordapp.com/attachments/880928327345504277/1190709570671214613/leo_logo_transparente.png?ex=65a2c9b3&is=659054b3&hm=e2355e2ee5b6735238e7ac2b8e270dfad04a19068e7aaf06383a2adbf5cf68ee&"
            alt="logo"
            className="logo"
          />

          <h2>Task App</h2>
          <h5>Sign in today to use Task App on all your divice</h5>
          <div className="thirdPartyAuth">
            <button className="buttonStyle" onClick={() => signInWithGoogle()}>
              <FcGoogle style={{ filter: "invert(1)" }} size={20} /> Google
            </button>
            <button className="buttonStyle" onClick={() => signInWithGithub()}>
              <FaGithub style={{ color: "gray" }} size={20} />
              Github
            </button>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="YourEmail@someEmail.com"
            required
          />
          {/* <label>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your very strong password'
                /> */}
          <button id="submitButton" type="submit">
            Login Magic link
          </button>
        </form>
      )}
    </div>
  );
}
