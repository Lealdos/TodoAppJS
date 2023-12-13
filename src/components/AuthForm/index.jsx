import "./index.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const AuthForm = () => {
  //   useEffect(() => {
  //     if (error) {
  //       setError();
  //     }
  //   }, [error]);

  const handlerMagiclink =()=>{
    console.log("magic link")
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    // try {
    //   console.log("1");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="login">
        
      <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
        <h2>Task App</h2>
        <h5>Sign in today to use Task App on all your divices</h5>
        <div className="thirdPartyAuth">
          <button className="buttonStyle">
            <FcGoogle style={{ filter: "invert(1)" }} size={20} /> Google
          </button>
          <button className="buttonStyle">
            <FaGithub style={{ color: "gray" }} size={20} />
            Github
          </button>
        </div>
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="YourEmail@someEmail.com"
          required
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your very strong password"
          required
        />
        <button  className='submitButton' type="submit">Login</button>
        <a onClick={handlerMagiclink} style={{ cursor: "pointer" }}>Magic link</a>
      </form>
    </div>
  );
};
