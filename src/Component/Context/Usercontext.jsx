import React, { useState } from "react";
import { createContext } from "react";
export let Usercontext = createContext()
export default function UsercontextProvider(e){
    const [user, setUser] = useState(null)
    return<Usercontext.Provider value={{user , setUser}}>
        {e.children}
    </Usercontext.Provider>
}