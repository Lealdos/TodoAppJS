/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { supabase } from 'supabaseClient/client';

import styles from './index.module.css';
import { FaGithub } from 'react-icons/fa';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa6';
import { Modal, AuthForm } from 'components';
import { UserContext } from 'components/context/Auth/authIn';

export function NavBar() {
    const { user, setUser, profile } = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false);
    const [openAuth, setOpenAuth] = useState(false);
    const handleClick = () => {
        setOpenModal(!openModal);
        setOpenAuth(!openAuth);
    };

    const userName = profile?.user_metadata?.user_name;
    const userAvatar = profile?.user_metadata?.avatar_url;
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log(error);
        }
        setUser(null);
    };

    // useEffect(() => {
    //     if (openAuth && openAuth && user) {
    //         setOpenModal(!openModal);
    //         setOpenAuth(!openAuth);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [user]);

    return (
        <div className={styles.header}>
            <a href='https://www.linkedin.com/in/jleonardod/'>
                <FaLinkedin size={18} /> linkedin
            </a>
            <a href='https://github.com/lealdos'>
                {' '}
                <FaGithub size={20} />
                Github
            </a>
            <div className={styles.profile}>
                <span>{userName}</span>
                <img src={userAvatar} alt='profile' />
            </div>
            <nav className={styles.navbar}>
                {user ? (
                    <a onClick={signOut}>
                        Sing Out <GoSignOut size={20} />
                    </a>
                ) : (
                    <a onClick={handleClick}>
                        Sign In <GoSignIn size={20} />
                    </a>
                )}

                {openModal && openAuth && (
                    <Modal
                        openStatus={openModal}
                        setOpenModal={setOpenModal}
                        openItem={openAuth}
                        setOpenItem={setOpenAuth}
                    >
                        <AuthForm
                            openStatus={openModal}
                            setOpenModal={setOpenModal}
                            openAuth={openAuth}
                            setOpenAuth={setOpenAuth}
                        />
                    </Modal>
                )}
            </nav>
        </div>
    );
}
