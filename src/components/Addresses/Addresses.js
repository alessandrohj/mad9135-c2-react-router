import './addresses.css'

export default function Addresses({list}){
    
    let sortedData;

  function sortData(data){
    sortedData = data.sort((a,b)=>{
        if( a.name['last'] < b.name['last']) {
            return -1
        } 
        if ( a.name['last'] > b.name['last']) {
            return 1
        }
        return 0
      })
  }
  sortData(list);

    return (
        <div className='address-list'>
        {
            sortedData.map(({name, location}, index)=>(
                <div className='user-info' key={index}>
                <p className='address'>{location.street.number} {location.street.name}, {location.city}, {location.state}, {location.country}</p>
                <p>{name.first} {name.last}</p>
               </div>
            ))
        }

        </div>
    )
}