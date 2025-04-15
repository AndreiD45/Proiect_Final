import axios from 'axios'

const Url = 'http://localhost:3000/users'

const login = async (name, password) =>{
    try{
        const response = await axios.get(`${Url}?name=${name}&password=${password}`);
        const user = response.data[0];

        if(user){
            const token = btoa(`${user.email}:${user.password}`);
            localStorage.setItem(`token`, token);
            localStorage.setItem(`user`, JSON.stringify(user));
            return user;
        }else{
            throw new Error(`Invalid password or name`)
        }
    } catch(err){
        throw new Error(`Login failed`);
    }
};


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    const authService = { login, logout };
    export default authService;