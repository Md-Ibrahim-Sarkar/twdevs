"use client"
import { createContext, useState } from "react"



export const DrawerContext = createContext()

export const DrawerProvider  = ({children}) => {

    const [isOpen,setIsOpen] = useState(true)
  

    return (
        <DrawerContext.Provider value={{ isOpen, setIsOpen }}>  
            {children}
        </DrawerContext.Provider>
    )
}

// -----------------------------------------------------------

export const ComponentsContext = createContext();
export const ComponentsProvider  = ({children}) => {

    
     const [selectedComponent, setSelectedComponent] = useState(null)
      
      return (
          <ComponentsContext.Provider value={{ selectedComponent, setSelectedComponent }}>  
              {children}
          </ComponentsContext.Provider>
      )
}


  

// ____________________________________________________________________