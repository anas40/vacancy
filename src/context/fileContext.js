import { createContext,useState } from 'react'

export const fileContext = createContext()

export function FileProvider(props){
    const [file,setFile] = useState(undefined)
    return(<fileContext.Provider value={[file,setFile]}>
        {props.children}
    </fileContext.Provider>)
}
