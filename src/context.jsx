import { createContext, useState } from "react";

export const App_context = createContext()

const App_Provider = ({ children }) => {


    return (
        <App_context.Provider value={{ check }}>
            {children}
        </App_context.Provider>
    )
}
export default App_Provider 