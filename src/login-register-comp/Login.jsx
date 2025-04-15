import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"


export default function Login(){

    const [userName, setUserName] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [error, setError] = useState(``)
    const navigate = useNavigate();



    
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(userName, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    }
  };


    return(

        <>
        <div className={styles.login_container}>
            <h2>Login!</h2>
            <form onSubmit={handleSubmit}>
            <div className={styles.login_item}>
                        <label >UserName: </label>
                        <input type="email" value={userName} placeholder="Ionut Popa" onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className={styles.login_item}>
                        <label >Email: </label>
                        <input type="email" value={email} placeholder="name@email.com" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.login_item}>
                    <label>Password: </label>
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type="submit">Login</button>
            </form>

        </div>
        </>

    )
}