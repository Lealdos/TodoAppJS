/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import styles from "./index.module.css";
import { FaGithub } from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import { Modal } from "components";
import { AuthForm } from "components";
import { UserContext } from "components/context/Auth/authIn";

export function NavBar( ) {
  const {user} = useContext(UserContext)
  const [openModal,setOpenModal] =useState(false)
  const [openAuth, setOpenAuth] =useState(false)
  const handleClick = () => {
    setOpenModal(!openModal);
    setOpenAuth(!openAuth);
  };
  return (
    <div className={styles.header}>
      <a href="https://www.linkedin.com/in/jleonardod/">
        <FaLinkedin size={18} /> linkedin
      </a>
      <a href="https://github.com/lealdos">
        {" "}
        <FaGithub size={20} />
        Github
      </a>
      <nav className={styles.navbar}>
        <a onClick={() => handleClick()}>
          {user ? "Sing Out" : "Sing In"}
          {user ? <GoSignOut size={20} /> : <GoSignIn size={20} />}
        </a>
        {openModal && openAuth && (
          <Modal 
            openStatus={openModal}
            setOpenModal={setOpenModal}
            openItem={openAuth}
            setOpenItem={setOpenAuth}
          >
              <AuthForm
              />
          </Modal>
        )}
      </nav>
    </div>
  );
}
