import {NavLink, Route} from 'react-router-dom';
import Details from '../Details/Details';
import './users.css';

export default function Users({list}){

    function findUser(id){
        let user = list.find((item, index)=> id == index+1)
        console.log(user);
        return user;
    }

    return (
        <div className='users'>
           {
               list.map((item, index) => (
                   <NavLink to={`/users/${index+1}`}>
                <div className='user-card' key={index} onClick={()=>(
                    document.getElementById('user-details').style.display = 'block'
                )}>
                <img className='user-image' src={item.picture.medium} alt={item.name.first}/>
                <h2>{item.name.first} {item.name.last}</h2>
                <h3>{item.email}</h3>
                <h3>Phone: <span>{item.phone}</span></h3>
            </div>
                   </NavLink>
               ))
           }
           <div className='user-details' id='user-details'>
               <div className='user-details-content'>
               <span className="close" onClick={()=>(
                    document.getElementById('user-details').style.display = 'none'
                )}>&times;</span>
            <Route path="/users/:id">
            <Details findUser={findUser}/>
            </Route>
            </div>
            </div>
        </div>
    )
}