import { Home } from '../home'
import cx from 'classnames';
import styles from '../../styles/Home.module.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from "react";
import { auth } from '../../firebase';
import { useRouter } from 'next/router';

export default function Signin() {
        const router = useRouter()
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const [
        SignInWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useSignInWithEmailAndPassword(auth);

        function handleSignIn(e){
          e.preventDefault();
          SignInWithEmailAndPassword(email, password);
        }

        if(loading){
            return <p>Realizando cadastro...</p>;
        }

        if(user){
            router.push('/home-adm', '/home')
        }

        const handleClick = (e) => {
            e.preventDefault()
            router.push('/home')
        }

    return (
        <>
            <main className={cx(styles["form-signin"],"text-center","mt-5")}>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Administrador, faça seu login aqui!</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="nome@exemplo.com" onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Endereço de email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>
                    <button onClick={handleSignIn} className={cx(styles["bg-pink"],"w-100 btn btn-lg btn-primary bg-pink")} type="submit">Entrar</button>
                    <button onClick={handleClick} className={cx(styles["bg-pink"],"w-100 btn btn-lg btn-primary mt-2 bg-pink")} type="submit">Não sou administrador</button>
                </form>
            </main>
        </>
    )
}