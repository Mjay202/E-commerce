import { createContext, useState, } from "react";



export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState(null)
    
    
    const login = () => {
        
    }






    return 

    <AuthContext.Provider value={login}>
            {children}
    </AuthContext.Provider>
}