import {createContext, useContext} from 'react'

const dropdownContext = createContext()

const useDropdownContext = () => {
    return useContext(dropdownContext)
}

export {useDropdownContext}
export default dropdownContext