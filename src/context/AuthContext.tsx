import React, {useContext,createContext, useState, useEffect, ReactNode, ReactChild, ReactFragment} from 'react'
import {Props} from '../../@types/main'
type childrenProp ={
    children : React.ReactNode
}

export const AuthContext = createContext<Props | null>(null) ;

export const AuthProvider = ({children} : childrenProp ) => {

    const [theme, setTheme] = useState(false)

    
    const value ={
        theme,
        setTheme
    }    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

