import {NavLink, Route} from 'react-router-dom';
import Details from '../Details/Details';
import Loading from '../Loading/Loading';
import './users.css';

export default function Users({list}){

    let modal = document.getElementById('user-details');
    function handleClickInside(){
        modal.style.display = 'block';
    }

    function handleClickOutside(){
        modal.style.display = 'none'
    }

    function findUser(id){
        let user = list.find((item, index)=> id == index+1)
        console.log(user);
        return user;
    }

    return (
        <div className='users container grid gap-2'>
           {
               list.map((item, index) => (
                   <NavLink to={`/users/${index+1}`}>
                <div className='user-card rounded overflow-hidden shadow-lg' key={index} onClick={handleClickInside}>
                <img className='user-image' src={item.picture.medium} alt={item.name.first}/>
                <div className='user-card-details text-base '>
                <h2>{item.name.first} {item.name.last}</h2>
                <h3 className="break-all text-sm py-2">{item.email}</h3>
                <h3 className="text-sm">Phone: <span>{item.phone}</span></h3>
                </div>
            </div>
                   </NavLink>
               ))
           }
           {list.length <= 0 && <Loading/>}
           <div className='user-details' id='user-details'>
               <div className='user-details-content'>
               <span className="close" onClick={()=>(
                    modal.style.display = 'none'
                )}>&times;</span>
            <Route path="/users/:id">
            <Details findUser={findUser}/>
            </Route>
            </div>
            </div>
        </div>
    )
}