/* eslint-disable react/prop-types */
import './index.css';
import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { supabase } from 'supabaseClient/client';
import { UserContext } from 'context/Auth/authIn';

export function AuthForm() {
    const [emailSended, setEmailSended] = useState(false);
    const {setUser } = useContext(UserContext);
    const handlerMagiclink = async (userEmail) => {
        try {
            const { data } = await supabase.auth.signInWithOtp({
                email: userEmail,
                options: {
                    // set this to false if you do not want the user to be automatically signed up
                    emailRedirectTo: 'https://9000-monospace-todoapp-1699313960662.cluster-lknrrkkitbcdsvoir6wqg4mwt6.cloudworkstations.dev/?monospaceUid=304668&embedded=0',
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
        setEmailSended(true)
    };
    return (

        <div className='login'>
            {emailSended ? <div className='authForm'><h1>check your email</h1></div> :
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
                    {/* <label>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your very strong password'
                /> */}
                    <button className='submitButton' type='submit'>
                        Login Magic link
                    </button>

                </form>}
        </div>
    );
}
