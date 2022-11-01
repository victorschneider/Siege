import cx from 'classnames';
import styles from '../../styles/Home.module.css'
import Signin from 'pages/auth/signin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

// parte do client
export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleClick = e => {
      e.preventDefault()
      router.push('/auth/signin', '/')
  }

  function handleSignOut(e){
    e.preventDefault();
    createUserWithWithEmailAndPassword(email, password);
  }

  return (
    <>
      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Administrador, faça seu cadastro aqui!</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="nome@exemplo.com" onChange={e => setEmail(e.target.value)}/>
              <label htmlFor="floatingInput">Endereço de email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
              <label htmlFor="floatingPassword">Senha</label>
            </div>
            <button onClick={handleSignOut} className={cx(styles["bg-pink"],"w-100 btn btn-lg btn-primary bg-pink")} type="submit">Cadastrar</button>
            <button onClick={handleClick} className={cx(styles["bg-pink"],"w-100 btn btn-lg btn-primary mt-2 bg-pink")} type="submit">Já possuo cadastro</button>
        </form>
      </main>
    </>
  )
}
