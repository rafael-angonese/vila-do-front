import { createContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [name, setName] = useState('Nao tem nome por enquanto')

    return(
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContextProvider }
export default UserContext