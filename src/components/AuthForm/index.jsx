import './index.css';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { supabase } from 'supabaseClient/client';
import { UserContext } from 'context/Auth/authIn';

export const AuthForm = () => {
    const { user, setUser } = useContext(UserContext);

    const handlerMagiclink = async (userEmail) => {
        console.log(userEmail);
        try {
            const { data } = await supabase.auth.signInWithOtp({
                email: userEmail,
                options: {
                    // set this to false if you do not want the user to be automatically signed up
                    emailRedirectTo: 'http://localhost:5173/',
                },
            });
            setUser(data);
        } catch (error) {
            console.error(error);
        }
        console.log(user);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        await handlerMagiclink(formValues.email);
    };

    return (
        <div className='login'>
            <form className='authForm' onSubmit={(e) => handleSubmit(e)}>
                <h2>Task App</h2>
                <h5>Sign in today to use Task App on all your divice</h5>
                <div className='thirdPartyAuth'>
                    <button className='buttonStyle'>
                        <FcGoogle style={{ filter: 'invert(1)' }} size={20} />{' '}
                        Google
                    </button>
                    <button className='buttonStyle'>
                        <FaGithub style={{ color: 'gray' }} size={20} />
                        Github
                    </button>
                </div>
                <label>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='off'
                    placeholder='YourEmail@someEmail.com'
                    required
                />
                <label>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your very strong password'
                />
                <button className='submitButton' type='submit'>
                    Login
                </button>
                <a style={{ cursor: 'pointer' }}>Magic link</a>
            </form>
        </div>
    );
};
