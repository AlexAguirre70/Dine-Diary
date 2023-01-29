import {createContext , useState , useEffect } from 'react';


export const CurrentUser = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    useEffect (() => {
        const getLoggedInUser = async () => {
            try {
                 let response = await fetch('https://serene-mesa-48537.herokuapp.com/auth/profile', {
                credentials: 'include',
                headers: {
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            })
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            let user = await response.json()
            setCurrentUser(user)
        } catch (error) {
            console.error(error)
        }
    };
        

    getLoggedInUser()
},  [setCurrentUser])
    

    return(
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>

    )

};

export default CurrentUserProvider