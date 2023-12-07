/* eslint-disable react/prop-types */
import styles from "./index.module.css";
import { FaGithub } from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import { Modal } from "components";
import { AuthModal } from "../AuthModal";
import { useModal } from "../../assets/Hooks/useModal";

export function NavBar({ sesion = false }) {
  const [openModal, setOpenModal, openAuth, setOpenAuth] = useModal();
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
          {sesion ? "Sing Out" : "Sing In"}
          {sesion ? <GoSignOut size={20} /> : <GoSignIn size={20} />}
        </a>
        {openModal && openAuth && (
          <Modal
            openStatus={openModal}
            setOpenModal={setOpenModal}
            openItem={openAuth}
            setOpenItem={setOpenAuth}
          >
            <AuthModal />
          </Modal>
        )}
      </nav>
    </div>
  );
}
