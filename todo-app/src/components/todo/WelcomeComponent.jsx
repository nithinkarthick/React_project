import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import {  retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';

export default function WelcomeComponent(){
    const {username} = useParams();

    const [message, setMessage] = useState(null)


    function callHelloWorldRestApi(){
        console.log('called')

       
            retrieveHelloWorldPathVariable('nithin')
            .then((response) => successFullResponse(response) )
            .catch( (error) => errorResponse(error))
            .finally( () => console.log('cleanup'))
    }

    function successFullResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    console.log(username)
    return(
        
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call hello world</button>
            </div>
            <div className="text-info">{message}</div>
        </div>

    )
}
