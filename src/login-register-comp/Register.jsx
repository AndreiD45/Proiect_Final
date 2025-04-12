import { useState } from "react"
import styles from "./Login.module.css"


export default function Register(){

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!validate()) return;

    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (res.ok) {
        setSuccessMessage('Registration successful!');
        setValues({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        const data = await res.json();
        setErrors({ general: data.message || 'Registration failed' });
      }
    } catch (err) {
      setErrors({ general: 'Something went wrong. Try again later.' });
    }
    }


    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        let newErrors = {};
    
        if (!values.name.trim()) newErrors.name = 'Name is required';
        if (!values.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = 'Email is invalid';
        if (!values.password) newErrors.password = 'Password is required';
        if (values.password !== values.confirmPassword)
          newErrors.confirmPassword = 'Passwords do not match';
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    return(
        <>
        <div className={styles.register_container}>
        <h1>Register</h1>
        <div className={styles.options}>
            <form id="register-form" onSubmit={handleSubmit}>
            {errors.general && <p className="error">{errors.general}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
                <div className={styles.register_item}>
                <label >User Name: </label>
                <input type="text" name="name" placeholder="John" value={values.name} onChange={handleChange} required/>
                {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className={styles.register_item}>
                <label >Email: </label>
                <input type="text" name="email" placeholder="nickname@email.net" value={values.email} onChange={handleChange} required/>
                {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className={styles.register_item}>
                <label >Password: </label>
                <input type="password" name="password" placeholder="***********"  value={values.password} onChange={handleChange} required/>
                {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className={styles.register_item}>
                <label >Password check: </label>
                <input type="password" name="confirmPassword" placeholder="***********" value={values.confirmPassword} onChange={handleChange} required/>
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <div>
                    <button type="submit"> Sign Up!</button>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}