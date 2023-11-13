import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Outlet, Link, useLocation, useParams } from "react-router-dom";
import { Profilecontainer } from './ProfileContainer';
import { Confirmcontainer } from './ConfirmContainer';
import { Searchcontainer } from './SearchContainer';
import { Receivedcontainer } from './ReceivedContainer';
import { Sentcontainer } from './SentContainer';
import { Confirmconfirmcontainer } from './ConfirmConfirmContainer';
import { EditProfile } from './EditProfile';
import { getUser } from './CurrentUser';

const App = () => {

  var { user }= useParams();

  useEffect(()=>{
    user = getUser(user)
  },[])

  return  (
      <div className="App">
        <h1 id= "ieat">iEat</h1>
          <div className="navtab">
                  <div className= "profilelink">
                  <Link to={`/profile/${user}`}
                      id = "link1" >Profile
                  </Link>
                  </div>
                  <div className= "searchlink">
                  <Link to={`/search/${user}`}
                      id = "link2"> Search
                  </Link>
                  </div>
                  <div className= "confirmlink">
                  <Link to = {`/confirm/${user}`}
                    id = "link3"> Confirm
                  </Link>
                  </div>
          </div>
          <Outlet/>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path= "/" element={<App />}> 
      <Route path= ":user" element ={<Profilecontainer />}/>
      <Route path= "profile/:user" element= {<Profilecontainer />}/>
      <Route path= "search/:user" element={<Searchcontainer />}/>
      <Route path= "edit/:user" element={<EditProfile />} /> 
      <Route path= "confirm" element={<Confirmcontainer />}>
        <Route path= "sent/:user" element= {<Sentcontainer/>}/>
        <Route path= "received/:user" element= {<Receivedcontainer/>}/>
        <Route path= ":user" element= {<Confirmconfirmcontainer />}/>
      </Route>
    </Route>
</Routes>
</BrowserRouter>);