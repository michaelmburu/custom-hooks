import axios from "axios";
import { useDataSource } from "./useDataSource";
import { useResource } from "./useResource";


// improving the useDataResource custom hook that takes in a URL to fetch data
export const UserInfo = ({userId}) => {
    
    //Improve useDataResource custom hook to use any data source
    const serverResource = resourceUrl => async () => {
        const response = await axios.get(resourceUrl);
        return response.data;
    }

    const localStorageResource = key => () => {
        return localStorage.getItem(key);
    }
    
    //use resource example
    const user = useResource(`/users/${userId}`);
    // use dataSource examples
    const user2  = useDataSource(serverResource(`/users/${userId}`))
    const message  = useDataSource(localStorageResource('message'));

    const {name, age, hairColor, hobbies} = user || {};

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies: </h3>
                <ul>
                    {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
                </ul>
        </>
    ) : <p>Loading....</p>;


}