/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const AlertContext = createContext(undefined);

export const AlertProvider = ({children}) => {
    const [state,setState] = useState({
        isOpen: false,
        type:"success",
        message:""
    });

    return(
        <AlertContext.Provider value={{
            ...state, //spreading regular state and adding NEW information via props value
            onOpen: (type, message) => setState({isOpen: true, type, message}),
            onClose: () => setState({ isOpen: false, type: '', message: '' })
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlertContext = () => useContext(AlertContext) //this is a custom hook so components can consume context in their own level