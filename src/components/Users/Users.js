import {useState, useEffect} from 'react';
import './users.css';

export default function Users(){


    const [list, setList] = useState([]);


    async function getData(){
        let seed = 'deje0014';
        let nat = 'au,ca,nz,gb,us';
        let qty = 20;
        let url = `https://randomuser.me/api/?seed=${seed}&format=json&${nat}&results=${qty}`;;

        fetch(url)
        .then(resp=> resp.json())
        .then(data => {
            console.log(data.results);
          setList(data.results)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        getData();
    }, [])


    return (
        <div className='users'>
           {
               list.map((item, index) => (
                <div className='user-card' key={index}>
                <img className='user-image' src={item.picture.medium} alt={item.name.first}/>
                <h2>{item.name.first} {item.name.last}</h2>
                <h3>{item.email}</h3>
                <h3>Phone: <span>{item.phone}</span></h3>
            </div>
               ))
           }
        </div>
    )
}