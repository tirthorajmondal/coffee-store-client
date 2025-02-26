import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {

    }

    const handelToggle = (e) => {
        e.preventDefault()
        const p = e.target;
        if (p.innerText === 'Show') {
            p.innerText = 'Hide';
            document.getElementsByClassName('password').type = 'text';
        }
        else {
            p.innerText = 'Show'
            document.getElementsByClassName('password').type = 'password';
        }
    }


    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        handelToggle,


    }

    // const 
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;