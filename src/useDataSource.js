import axios from "axios"
import { useEffect, useState } from "react"

export const useDataSource = getResourceFunction => {

    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () =>{
            const result = await getResourceFunction();
            setResource(result)
        })();
    }, [getResourceFunction])

    return resource;
}