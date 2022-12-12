import React, { useState, useEffect } from 'react';

export const UsersContext = React.createContext();


//function to get items from local storage
const getLocalStorage = () => {
    let list = localStorage.getItem('usersData');
   
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

const UsersContextProvider = (props) => {

    //Initializing data with the items returned by getLocalStorage function
    const [data, setData] = useState(getLocalStorage());


    //Fetching data from json
    const getData = () => {
        fetch('celebrities.json')
            .then(function (response) {
                //   console.log(response)
                return response.json();
            })
            .then(function (data) {
                //   console.log(data);
                setData(data)
            });
    }
    useEffect(() => {
        getData()
    }, [])



    //Storing items in local storage
    useEffect(() => {
        localStorage.setItem('usersData', JSON.stringify(data));
    }, [data])



    //delete user function
    const deleteUser = (id) => {

        const updatedUsers = data.filter((element) => {
            return element.id !== id
        })
        setData(updatedUsers);
    }

    //update user info function
    const updateInfo = (id, updatedInfo) => {
        setData(data.map((info) => (info.id === id ? updatedInfo : info)))
    }


    return (
        <UsersContext.Provider value={{ data, deleteUser, updateInfo }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider