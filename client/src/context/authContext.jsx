import axios from "axios";
import { createContext, useEffect, useState, } from "react";



export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    const login = async (userDetails) => {
        
        const res = await axios.post(
        "http://localhost:5200/api/auth/login",
        userDetails
        );
        setcurrentUser(res.data)
    }

    const logout = async() => {
        await axios.post("http://localhost:5200/api/auth/logout")
        setcurrentUser(null)
    }
    useEffect(() => {
      
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])
    




    return <AuthContext.Provider value={{ login, logout, currentUser }}>
            {children}
    </AuthContext.Provider>
}