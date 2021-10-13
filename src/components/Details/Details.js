import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Details(props){

    const [user, setUser] = useState(null);
    const {id } = useParams();

    useEffect(()=>{
        setUser(props.findUser(id))
    })
    console.log(user);

    return(
        <>
        <h2>{user.name.first}</h2>
        <img src={user.picture.large} alt={user.name.last}></img>
        <p className='address'>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}</p>
        <div className='login-info'>
           <span><h3>UUID:</h3>
            <p>{user.login.uuid}</p>
            </span> 
            <span>
            <h3>Username:</h3>
            <p>{user.login.username}</p>
            </span> 
            <h3>Password:</h3>
            <span>
            <p>{user.login.password}</p>
            </span> 
        </div>
        </>
    )
}