import React from 'react'
import UsersContextProvider from './comp/context/UsersContext';
import UserList from './comp/Users/UserList';


function App() {

  return (
    <div className="App">


      <UsersContextProvider>
        <UserList />
      </UsersContextProvider>

    </div>
  );
}

export default App;