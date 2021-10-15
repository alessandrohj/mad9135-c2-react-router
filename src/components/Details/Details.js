import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import './details.css'


export default function Details(props){

    const [user, setUser] = useState(null);
    const {id } = useParams();

    useEffect(()=>{
        setUser(props.findUser(id))
    })
    console.log(user);



    return(
        <>
          {id.length <= 0 && <Loading/>}
        <h2 className='font-bold text-xl pb-2'>{user && user.name.first}</h2>
        <img src={user && user.picture.large} alt={user && user.name.last} className='mb-2 border rounded border-black'/>
        <p className='address'>{user && user.location.street.number} {user && user.location.street.name}, {user && user.location.city}, {user && user.location.state}, {user && user.location.country}</p>
        <div className='login-info my-4'>
           <span><h3 className='font-bold'>UUID:</h3>
            <p>{user && user.login.uuid}</p>
            </span> 
            <span>
            <h3 className='font-bold my-1'>Username:</h3>
            <p>{user && user.login.username}</p>
            </span> 
            <h3 className='font-bold my-1'>Password:</h3>
            <span>
            <p>{user && user.login.password}</p>
            </span> 
        </div>
        </>
    )
}