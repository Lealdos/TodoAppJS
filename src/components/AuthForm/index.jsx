/* eslint-disable react/prop-types */
import './index.css';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { supabase } from 'supabaseClient/client';
import { useAuth } from 'context/User';

export function AuthForm() {
    const [emailSended, setEmailSended] = useState(false);
    const { setUser } = useAuth();
    const handlerMagiclink = async (userEmail) => {
        try {
            const { data } = await supabase.auth.signInWithOtp({
                email: userEmail,
                options: {
                    // set this to false if you do not want the user to be automatically signed up
                    emailRedirectTo: 'https://lealdos.github.io/TodoAppJS/',
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
            provider: 'github',
            options: {
                redirectTo: 'https://lealdos.github.io/TodoAppJS/',
            },
        });
    };

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://lealdos.github.io/TodoAppJS/',
            },
        });
    };
    return (
        <div className='login'>
            {emailSended ? (
                <div className='authForm'>
                    <h1>check your email</h1>
                </div>
            ) : (
                <form className='authForm' onSubmit={(e) => handleSubmit(e)}>
                    <img src='./Devgado_logo.svg' alt='logo' className='logo' />

                    <h2>Task App</h2>
                    <h5>Sign in today to use Task App on all your divice</h5>
                    <div className='thirdPartyAuth'>
                        <button
                            className='buttonStyle'
                            onClick={() => signInWithGoogle()}
                        >
                            <FcGoogle
                                style={{ filter: 'invert(1)' }}
                                size={20}
                            />{' '}
                            Google
                        </button>
                        <button
                            className='buttonStyle'
                            onClick={() => signInWithGithub()}
                        >
                            <FaGithub style={{ color: 'gray' }} size={20} />
                            Github
                        </button>
                    </div>
                    <label htmlFor='email'>Email</label>
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
                    <button id='submitButton' type='submit'>
                        Login Magic link
                    </button>
                </form>
            )}
        </div>
    );
}
