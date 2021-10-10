import './users.css';

export default function Users({list}){

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