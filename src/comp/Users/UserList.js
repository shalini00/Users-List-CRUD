import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/UsersContext'
import Pagination from '../Pagination/Pagination'
import Users from './Users'
import './UserList.css'




function UserList() {

  //Getting data from context
  const { data } = useContext(UsersContext)

  //Pagination state and constants
  const [currentPage, setCurrentPage] = useState(1);
  
  const dataPerPage = 5;
  const lastPage = currentPage * dataPerPage;
  const firstPage = lastPage - dataPerPage;
  const currentData = data.slice(firstPage, lastPage)

  //Pagination ends (variable decaration n all)

  
  //state variables for search
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //will take only values from data array and join to make a one full string and then filter accordingly
  const searchHandler = (e) => {

    setSearchTerm(e.target.value);
    if (searchTerm !== "") {
      const newData = data.filter((data) => {
        return Object.values(data)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
      setSearchResults(newData);
    } else {
      setSearchResults(data);
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Celebrities Data</h1>
        <div className="search-user">
          <input
            type="text"

            className='search'
            placeholder=" Search User"
            value={searchTerm}
            onChange={searchHandler}
          />

        </div>

        {/* { if search length is less than 1 and data exits then map function excute on data else on search result data} */}
        {
          searchTerm.length < 1 && currentData && currentData.length > 0
            ? currentData.map((item) => (
              <div key={item.id}>
                <Users item={item} />

              </div>
            ))
            :
            searchResults.map((item) => (
              <div key={item.id}>
                <Users item={item} />

              </div>

            ))
        }

        
        
        {/* { Pagination component} */}
        <Pagination
          totalData={data.length}
          dataPerPage={dataPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage} />

      </div>

    </>
  )
}

export default UserList
