
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


  let thClass = "p-3 text-left bg-gray-100 sm:text-center";
  let tdClass = "border-grey-light border p-3";

    return (
<div className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className="text-black">
        {
            sortedData.map(item =>(
                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className={thClass}>Street</th>
                <th className={thClass}>City</th>
                <th className={thClass}>State</th>
                <th className={thClass}>Country</th>
                <th className={thClass}>Name</th>
            </tr>
            ))
        }
             </thead>
        <tbody className="flex-1 sm:flex-none">
          {
              sortedData.map(({name, location}, index)=>(
                    <tr className="flex flex-col flex-no-wrap sm:table-row mb-2 sm:mb-0 user-info">
                        <td className={tdClass}>{location.street.number} {location.street.name}</td>
                        <td className={tdClass}>{location.city}</td>
                        <td className={tdClass}>{location.state}</td>
                        <td className={tdClass}>{location.country}</td>
                        <td className={tdClass}>{name.first} {name.last}</td>
                    </tr>
              ))
            }
            </tbody>
		</table>
	</div>
</div>


    )
}