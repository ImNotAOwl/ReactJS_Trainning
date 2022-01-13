import { useEffect } from "react"

const useAlert = (message) => {
    useEffect( () => alert(message) )
};

export default useAlert;